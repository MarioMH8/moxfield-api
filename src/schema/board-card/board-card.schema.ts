import { z } from 'zod';

import { BoardTypeSchema } from '../board-type';
import { CardSchema } from '../card';
import { FinishSchema } from '../finish';
import { PrintCardSchema } from '../print-card';

const BoardCardSchema = z
	.object({
		boardType: BoardTypeSchema,
		card: CardSchema,
		excludedFromColor: z.boolean(),
		finish: FinishSchema,
		isAlter: z.boolean(),
		isFoil: z.boolean(),
		isProxy: z.boolean(),
		printingData: z.array(PrintCardSchema).nullish(),
		quantity: z.number(),
		useCmcOverride: z.boolean(),
		useColorIdentityOverride: z.boolean(),
		useManaCostOverride: z.boolean(),
	})
	.strict();

export default BoardCardSchema;
