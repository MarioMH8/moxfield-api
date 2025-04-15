import type z from 'zod';

import type DeckListSchema from './deck-list.schema';

export type DeckListType = z.infer<typeof DeckListSchema>;
