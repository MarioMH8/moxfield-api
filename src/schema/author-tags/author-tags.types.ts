import type z from 'zod';

import type AuthorTagsSchema from './author-tags.schema';

export type AuthorTagsType = z.infer<typeof AuthorTagsSchema>;
