import type z from 'zod';

import type SetTypeSchema from './set-type.schema';

export type SetTypeType = z.infer<typeof SetTypeSchema>;
