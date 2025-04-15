import type z from 'zod';

import type OriginalDeckSchema from './original-deck.schema';

export type OriginalDeckType = z.infer<typeof OriginalDeckSchema>;
