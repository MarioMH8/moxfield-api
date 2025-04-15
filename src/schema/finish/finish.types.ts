import type z from 'zod';

import type FinishSchema from './finish.schema';

export type FinishType = z.infer<typeof FinishSchema>;
