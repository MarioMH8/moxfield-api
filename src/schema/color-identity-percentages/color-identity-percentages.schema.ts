import { z } from 'zod';

const ColorIdentityPercentagesSchema = z.object({
	black: z.number(),
	blue: z.number(),
	green: z.number(),
	red: z.number(),
	white: z.number(),
});

export default ColorIdentityPercentagesSchema;
