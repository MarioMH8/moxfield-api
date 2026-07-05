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
	/** Convenience alias for pageSize. */
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
			...(limit !== undefined && { pageSize: limit }),
			...(sort !== undefined && SORT_MAP[sort]),
		};

		const parameters = new URLSearchParams();
		for (const [key, value] of Object.entries(resolved)) {
			parameters.set(key, String(value));
		}

		return fetchWithZod(DeckSearchSchema, `${API_BASE_URL}/v2/decks/search-sfw?${parameters}`, {
			method: 'GET',
		});
	}
}

export default DeckSearchApi;
export type { DeckSearchOptions };
