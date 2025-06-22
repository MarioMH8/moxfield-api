import { z } from 'zod';

import { BoardTypeSchema } from '../board-type';
import { CardSchema } from '../card';
import { ColorIdentitySchema } from '../color-identity';
import { FinishSchema } from '../finish';
import { PrintCardSchema } from '../print-card';

const BoardCardSchema = z
	.object({
		boardType: BoardTypeSchema,
		card: CardSchema,
		cmcOverride: z.number().nullish(),
		colorIdentityOverride: z.array(ColorIdentitySchema).nullish(),
		excludedFromColor: z.boolean(),
		finish: FinishSchema,
		isAlter: z.boolean(),
		isCompanion: z.boolean().nullish(),
		isFoil: z.boolean(),
		isProxy: z.boolean(),
		manaCostOverride: z.string().nullish(),
		printingData: z.array(PrintCardSchema).nullish(),
		quantity: z.number(),
		useCmcOverride: z.boolean(),
		useColorIdentityOverride: z.boolean(),
		useManaCostOverride: z.boolean(),
	})
	.strict();

export default BoardCardSchema;
