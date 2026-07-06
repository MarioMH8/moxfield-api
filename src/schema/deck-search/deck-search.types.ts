import type z from 'zod';

import type DeckSearchSchema from './deck-search.schema';

export type DeckSearchType = z.infer<typeof DeckSearchSchema>;
