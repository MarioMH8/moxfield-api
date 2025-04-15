import type z from 'zod';

import type AuthorSchema from './author.schema';

export type AuthorType = z.infer<typeof AuthorSchema>;
