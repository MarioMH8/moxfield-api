import type z from 'zod';

import type ProviderPricesSchema from './provider-prices.schema';

export type ProviderPricesType = z.infer<typeof ProviderPricesSchema>;
