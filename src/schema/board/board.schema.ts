import { z } from 'zod';

import { BoardCardSchema } from '../board-card';

const BoardSchema = z.object({
	cards: z.record(z.string(), BoardCardSchema),
	count: z.number(),
});

export default BoardSchema;
