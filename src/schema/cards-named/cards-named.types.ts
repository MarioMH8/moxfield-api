import type z from 'zod';

import type CardsNamedSchema from './cards-named.schema';

export type CardsNamedType = z.infer<typeof CardsNamedSchema>;
