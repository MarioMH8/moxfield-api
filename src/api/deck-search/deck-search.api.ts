import { createZodFetcher } from 'zod-fetch';

import createMoxfieldFetcher from '../../fetcher';
import type { DeckSearchType } from '../../schema';
import { DeckSearchSchema } from '../../schema';

const API_BASE_URL = 'https://api2.moxfield.com';

const SORT_MAP = {
	mostLiked: { sortDirection: 'descending', sortType: 'likes' },
	mostViewed: { sortDirection: 'descending', sortType: 'views' },
	recent: { sortDirection: 'descending', sortType: 'updated' },
} as const;

interface DeckSearchOptions {
	commanderCardId?: string;
	fmt?: string;
	/** Total number of results to return, auto-paginating across multiple pages as needed. */
	limit?: number;
	maxBracket?: number;
	minBracket?: number;
	pageNumber?: number;
	pageSize?: number;
	q?: string;
	/** Convenience shorthand for common sort orders. Takes precedence over sortType/sortDirection. */
	sort?: keyof typeof SORT_MAP;
	sortDirection?: 'ascending' | 'descending';
	sortType?: 'created' | 'likes' | 'updated' | 'views';
}

const fetchWithZod = createZodFetcher(createMoxfieldFetcher());

class DeckSearchApi {
	async search(options: DeckSearchOptions = {}): Promise<DeckSearchType> {
		const { limit, sort, ...rest } = options;

		const resolved = {
			...rest,
			...(sort !== undefined && SORT_MAP[sort]),
		};

		const buildUrl = (parameters_: Record<string, unknown>): string => {
			const parameters = new URLSearchParams();
			for (const [key, value] of Object.entries(parameters_)) {
				parameters.set(key, String(value));
			}

			return `${API_BASE_URL}/v2/decks/search-sfw?${parameters}`;
		};

		if (limit === undefined) {
			return fetchWithZod(DeckSearchSchema, buildUrl(resolved), { method: 'GET' });
		}

		const perPage = resolved.pageSize ?? Math.min(limit, 100);
		const startPage = resolved.pageNumber ?? 1;

		const firstResponse = await fetchWithZod(
			DeckSearchSchema,
			buildUrl({ ...resolved, pageNumber: startPage, pageSize: perPage }),
			{ method: 'GET' }
		);

		const allData: DeckSearchType['data'] = [...firstResponse.data];

		if (allData.length < limit && firstResponse.totalPages > startPage) {
			const pagesNeeded = Math.ceil((limit - allData.length) / perPage);
			const lastPage = Math.min(firstResponse.totalPages, startPage + pagesNeeded);
			const pageNumbers = Array.from({ length: lastPage - startPage }, (_, index) => startPage + 1 + index);

			const responses = await Promise.all(
				pageNumbers.map(page =>
					fetchWithZod(DeckSearchSchema, buildUrl({ ...resolved, pageNumber: page, pageSize: perPage }), {
						method: 'GET',
					})
				)
			);

			for (const response of responses) {
				allData.push(...response.data);
			}
		}

		return { ...firstResponse, data: allData.slice(0, limit) };
	}
}

export default DeckSearchApi;
export type { DeckSearchOptions };
