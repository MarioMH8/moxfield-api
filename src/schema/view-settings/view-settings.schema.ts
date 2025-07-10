import { z } from 'zod';

import { testStrict } from '../../helpers';

const ViewSettingsSchema = z.object({
	allowMultiplePrintings: z.boolean(),
	groupBy: z.string(),
	sortBy: z.string(),
	useMana: z.boolean(),
	usePrice: z.boolean(),
	useSet: z.boolean(),
	useTiers: z.boolean(),
	viewMode: z.string(),
});

export default testStrict(ViewSettingsSchema);
