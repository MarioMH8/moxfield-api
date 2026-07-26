import { z } from 'zod';

const ProviderPriceSchema = z.object({
	buy: z.number().nullish(),
	retail: z.number().nullish(),
});

const ProviderFinishPricesSchema = z.record(z.string(), ProviderPriceSchema);

const ProviderPricesSchema = z.record(z.string(), ProviderFinishPricesSchema);

export default ProviderPricesSchema;
