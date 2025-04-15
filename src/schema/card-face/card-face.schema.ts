import { z } from 'zod';

import { ColorIdentitySchema } from '../color-identity';

const CardFaceSchema = z
	.object({
		color_indicator: z.array(ColorIdentitySchema),
		colors: z.array(ColorIdentitySchema),
		defense: z.string().nullish(),
		flavor_name: z.string().nullish(),
		flavor_text: z.string().nullish(),
		id: z.string(),
		image_seq: z.number(),
		loyalty: z.string().nullish(),
		mana_cost: z.string().nullish(),
		name: z.string(),
		oracle_text: z.string().nullish(),
		power: z.string().nullish(),
		toughness: z.string().nullish(),
		type_line: z.string(),
	})
	.strict();

export default CardFaceSchema;
