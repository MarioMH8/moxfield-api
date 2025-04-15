import { z } from 'zod';

import { BoardTypeSchema } from '../board-type';
import { CardSchema } from '../card';
import { FinishSchema } from '../finish';

const BoardCardSchema = z.object({
	boardType: BoardTypeSchema,
	card: CardSchema,
	excludedFromColor: z.boolean(),
	finish: FinishSchema,
	isAlter: z.boolean(),
	isFoil: z.boolean(),
	isProxy: z.boolean(),
	quantity: z.number(),
	useCmcOverride: z.boolean(),
	useColorIdentityOverride: z.boolean(),
	useManaCostOverride: z.boolean(),
});

export default BoardCardSchema;
