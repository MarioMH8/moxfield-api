import { createZodFetcher } from 'zod-fetch';

import createMoxfieldFetcher from '../../fetcher';
import type { CardNamedType, CardsNamedType } from '../../schema';
import { CardsNamedSchema } from '../../schema';

const API_BASE_URL = 'https://api2.moxfield.com';

const fetchWithZod = createZodFetcher(createMoxfieldFetcher());

class CardsNamedApi {
	async findByName(q: string, count = 10): Promise<CardsNamedType> {
		const parameters = new URLSearchParams({ count: String(count), q });

		return fetchWithZod(CardsNamedSchema, `${API_BASE_URL}/v3/cards/named?${parameters}`, {
			method: 'GET',
		});
	}

	async findFirstByName(q: string): Promise<CardNamedType | undefined> {
		const result = await this.findByName(q, 1);

		return result.cards.at(0);
	}
}

export default CardsNamedApi;
