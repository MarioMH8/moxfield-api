import { z } from 'zod';

const HubSchema = z
	.object({
		description: z.string(),
		name: z.string(),
	})
	.strict();

export default HubSchema;
