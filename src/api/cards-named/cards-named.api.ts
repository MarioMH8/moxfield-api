import { z } from 'zod';
import { createZodFetcher } from 'zod-fetch';

import createMoxfieldFetcher from '../../fetcher';
import type { CardType } from '../../schema';
import { CardSchema } from '../../schema';
import API_BASE_URL from '../base-url';

const fetchWithZod = createZodFetcher(createMoxfieldFetcher());
const NamedResponseSchema = z.object({
	cards: z.array(CardSchema),
});

class CardsNamedApi {
	async findByName(q: string, count = 10): Promise<{ cards: CardType[] }> {
		const parameters = new URLSearchParams({ count: String(count), q });

		return fetchWithZod(NamedResponseSchema, `${API_BASE_URL}/v3/cards/named?${parameters}`, {
			method: 'GET',
		});
	}

	async findFirstByName(q: string): Promise<CardType | undefined> {
		const result = await this.findByName(q, 1);

		return result.cards.at(0);
	}
}

export default CardsNamedApi;
