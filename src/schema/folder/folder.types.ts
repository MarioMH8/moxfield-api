import type z from 'zod';

import type FolderSchema from './folder.schema';

export type FolderType = z.infer<typeof FolderSchema>;
