import { z } from 'zod';
import { createZodFetcher } from 'zod-fetch';

import createMoxfieldFetcher from '../../fetcher';
import type { DeckListType } from '../../schema';
import { DeckListSchema } from '../../schema';

const MOXFIELD_DECK_URL_PREFIX = 'https://moxfield.com/decks/';
const MOXFIELD_DECK_URL_PREFIX_WWW = 'https://www.moxfield.com/decks/';
const API_BASE_URL = 'https://api2.moxfield.com';
const deckListIdSchema = z.coerce
	.string()
	.describe('DeckList id')
	.transform(value => {
		const parsed = z.coerce.string().url().safeParse(value);
		if (parsed.error) {
			return value;
		}
		const url = parsed.data;
		if (url.startsWith(MOXFIELD_DECK_URL_PREFIX) || url.startsWith(MOXFIELD_DECK_URL_PREFIX_WWW)) {
			const replaced = url.replace(MOXFIELD_DECK_URL_PREFIX, '').replace(MOXFIELD_DECK_URL_PREFIX_WWW, '');
			const split = replaced.split('/');

			// eslint-disable-next-line typescript/non-nullable-type-assertion-style
			return split.at(0) as string;
		}

		return parsed.data;
	});
const fetchWithZod = createZodFetcher(createMoxfieldFetcher());

class DeckListApi {
	async findById(id: string): Promise<DeckListType> {
		const parsed = deckListIdSchema.parse(id);

		return fetchWithZod(DeckListSchema, `${API_BASE_URL}/v3/decks/all/${parsed}`, {
			method: 'GET',
		});
	}
}

export default DeckListApi;
