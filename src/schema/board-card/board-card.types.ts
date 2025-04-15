import type z from 'zod';

import type BoardCardSchema from './board-card.schema';

export type BoardCardType = z.infer<typeof BoardCardSchema>;
