import { z } from 'zod';

import { CardSchema } from '../card';
import { FinishSchema } from '../finish';
import { PricesSchema } from '../prices';
import { RaritySchema } from '../rarity';

const PrintCardSchema = z
	.object({
		card: CardSchema,
		cardHoarderUrl: z.string().url().nullish(),
		cardKingdomFoilUrl: z.string().nullish(),
		cardKingdomUrl: z.string().nullish(),
		cardMarketUrl: z.string().url().nullish(),
		cn: z.string(),
		coolStuffIncFoilUrl: z.string().url().nullish(),
		coolStuffIncUrl: z.string().url().nullish(),
		finish: FinishSchema,
		foil: z.boolean(),
		hash: z.string(),
		id: z.string(),
		imageCardId: z.string(),
		imageCardIdIsCardFace: z.boolean(),
		isAlter: z.boolean(),
		isFoil: z.boolean(),
		isProxy: z.boolean(),
		lang: z.string(),
		nonfoil: z.boolean(),
		prices: PricesSchema,
		quantity: z.number(),
		rarity: RaritySchema,
		set: z.string(),
		set_name: z.string(),
		tcgPlayerUrl: z.string().url().nullish(),
	})
	.strict();

export default PrintCardSchema;
