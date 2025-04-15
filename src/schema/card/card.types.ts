import type z from 'zod';

import type CardSchema from './card.schema';

export type CardType = z.infer<typeof CardSchema>;
