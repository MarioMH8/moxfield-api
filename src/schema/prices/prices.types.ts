import type z from 'zod';

import type PricesSchema from './prices.schema';

export type PricesType = z.infer<typeof PricesSchema>;
