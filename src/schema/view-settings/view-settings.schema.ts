import { z } from 'zod';

const ViewSettingsSchema = z
	.object({
		allowMultiplePrintings: z.boolean(),
		groupBy: z.string(),
		sortBy: z.string(),
		useMana: z.boolean(),
		usePrice: z.boolean(),
		useSet: z.boolean(),
		useTiers: z.boolean(),
		viewMode: z.string(),
	})
	.strict();

export default ViewSettingsSchema;
