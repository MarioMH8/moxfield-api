import type z from 'zod';

import type CardsToTokensSchema from './cards-to-tokens.schema';

export type CardsToTokensSchemaType = z.infer<typeof CardsToTokensSchema>;
