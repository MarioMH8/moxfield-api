import type z from 'zod';

import type DeckSearchItemSchema from './deck-search-item.schema';

export type DeckSearchItemType = z.infer<typeof DeckSearchItemSchema>;
