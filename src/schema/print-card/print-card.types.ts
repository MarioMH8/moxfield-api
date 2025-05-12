import type z from 'zod';

import type PrintCardSchema from './print-card.schema';

export type PrintCardType = z.infer<typeof PrintCardSchema>;
