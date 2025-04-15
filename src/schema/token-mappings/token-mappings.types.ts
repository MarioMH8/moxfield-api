import type z from 'zod';

import type TokenMappingsSchema from './token-mappings.schema';

export type TokenMappingsType = z.infer<typeof TokenMappingsSchema>;
