import { z } from 'zod';

import { testStrict } from '../../helpers';
import { BoardCardSchema } from '../board-card';

const BoardSchema = z.object({
	cards: z.record(z.string(), BoardCardSchema),
	count: z.number(),
});

export default testStrict(BoardSchema);
