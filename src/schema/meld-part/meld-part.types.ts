import type z from 'zod';

import type MeldPartSchema from './meld-part.schema';

export type MeldPartType = z.infer<typeof MeldPartSchema>;
