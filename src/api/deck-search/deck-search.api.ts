import { z } from 'zod';
import { createZodFetcher } from 'zod-fetch';

import createMoxfieldFetcher from '../../fetcher';
import type { DeckSearchType } from '../../schema';
import { DeckSearchSchema } from '../../schema';
import API_BASE_URL from '../base-url';

const SORT_MAP = {
	mostLiked: { sortDirection: 'descending', sortType: 'likes' },
	mostViewed: { sortDirection: 'descending', sortType: 'views' },
	recent: { sortDirection: 'descending', sortType: 'updated' },
} as const;

const SORT_TYPES = ['colors', 'comments', 'created', 'deckBracket', 'format', 'likes', 'updated', 'views'] as const;

const deckSearchOptionsSchema = z.object({
	authorUserNames: z.array(z.string().min(1)).optional(),
	cardId: z.string().min(1).optional(),
	commanderCardId: z.string().min(1).optional(),
	companionCardId: z.string().min(1).optional(),
	deckName: z.string().min(1).optional(),
	fmt: z.string().min(1).optional(),
	hubName: z.string().min(1).optional(),
	maxBracket: z.number().int().positive().optional(),
	minBracket: z.number().int().positive().optional(),
	pageNumber: z.number().int().positive().optional(),
	pageSize: z.number().int().min(1).max(100).optional(),
	partnerCardId: z.string().min(1).optional(),
	q: z.string().min(1).optional(),
	/**
	 * Whether to use the SFW (safe-for-work) search endpoint (`/v2/decks/search-sfw`)
	 * instead of the unfiltered one (`/v2/decks/search`). Defaults to `true`.
	 */
	sfw: z.boolean().optional(),
	/**
	 * Convenience shorthand for common sort orders. Takes precedence over sortType/sortDirection.
	 */
	sort: z.enum(['mostLiked', 'mostViewed', 'recent']).optional(),
	sortDirection: z.enum(['ascending', 'descending']).optional(),
	sortType: z.enum(SORT_TYPES).optional(),
});

const deckSearchTopOptionsSchema = deckSearchOptionsSchema.omit({ pageNumber: true, pageSize: true }).extend({
	/**
	 * Total number of results to return, auto-paginating across multiple pages as needed.
	 */
	limit: z.number().int().positive(),
	pageSize: z.number().int().min(1).max(100).optional(),
});

type DeckSearchOptions = z.input<typeof deckSearchOptionsSchema>;
type DeckSearchTopOptions = z.input<typeof deckSearchTopOptionsSchema>;

const fetchWithZod = createZodFetcher(createMoxfieldFetcher());

class DeckSearchApi {
	/**
	 * Single-page wrapper around the Moxfield decks search endpoint.
	 * Returns the API response as-is, including its pagination metadata.
	 */
	async search(options: DeckSearchOptions = {}): Promise<DeckSearchType> {
		const parsed = deckSearchOptionsSchema.parse(options);
		const { sfw = true, sort, ...rest } = parsed;
		const resolved = {
			...rest,
			...(sort !== undefined && SORT_MAP[sort]),
		};

		return fetchWithZod(DeckSearchSchema, buildSearchUrl(resolved, sfw), { method: 'GET' });
	}

	/**
	 * Aggregates up to `limit` results across multiple pages of the search endpoint.
	 * The returned pagination metadata describes the first page fetched; `data` contains
	 * the aggregated, de-duplicated, truncated result set.
	 */
	async searchTop(options: DeckSearchTopOptions): Promise<DeckSearchType> {
		const parsed = deckSearchTopOptionsSchema.parse(options);
		const { limit, pageSize, sfw, ...rest } = parsed;

		const perPage = pageSize ?? Math.min(limit, 100);
		const firstResponse = await this.search({ ...rest, pageNumber: 1, pageSize: perPage, sfw });

		const allData: DeckSearchType['data'] = [...firstResponse.data];

		if (allData.length < limit && firstResponse.totalPages > 1) {
			const pagesNeeded = Math.ceil((limit - allData.length) / perPage);
			const lastPage = Math.min(firstResponse.totalPages, 1 + pagesNeeded);
			const pageNumbers = Array.from({ length: lastPage - 1 }, (_, index) => 2 + index);

			const responses = await Promise.all(
				pageNumbers.map(page => this.search({ ...rest, pageNumber: page, pageSize: perPage, sfw }))
			);

			for (const response of responses) {
				allData.push(...response.data);
			}
		}

		return { ...firstResponse, data: allData.slice(0, limit) };
	}
}

// eslint-disable-next-line unicorn/consistent-boolean-name
function buildSearchUrl(parameters_: Record<string, unknown>, sfw: boolean): string {
	const parameters = new URLSearchParams();
	for (const [key, value] of Object.entries(parameters_)) {
		if (value === undefined) {
			continue;
		}
		if (Array.isArray(value)) {
			parameters.set(key, (value as (number | string)[]).join(','));
			continue;
		}
		if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
			parameters.set(key, String(value));
		}
	}

	const path = sfw ? '/v2/decks/search-sfw' : '/v2/decks/search';

	return `${API_BASE_URL}${path}?${parameters}`;
}

export default DeckSearchApi;
export type { DeckSearchOptions, DeckSearchTopOptions };
