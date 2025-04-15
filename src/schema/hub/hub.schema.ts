import { z } from 'zod';

const HubSchema = z.object({
	description: z.string(),
	name: z.string(),
});

export default HubSchema;
