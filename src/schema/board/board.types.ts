import type z from 'zod';

import type BoardSchema from './board.schema';

export type BoardType = z.infer<typeof BoardSchema>;
