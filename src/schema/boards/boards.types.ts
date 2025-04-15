import type z from 'zod';

import type BoardsSchema from './boards.schema';

export type BoardsType = z.infer<typeof BoardsSchema>;
