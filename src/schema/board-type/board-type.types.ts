import type z from 'zod';

import type BoardsTypeSchema from './board-type.schema';

export type BoardTypeType = z.infer<typeof BoardsTypeSchema>;
