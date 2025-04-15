import type z from 'zod';

import type TokensToCardsSchema from './tokens-to-cards.schema';

export type TokensToCardsType = z.infer<typeof TokensToCardsSchema>;
