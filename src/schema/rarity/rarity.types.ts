import type z from 'zod';

import type RaritySchema from './rarity.schema';

export type RarityType = z.infer<typeof RaritySchema>;
