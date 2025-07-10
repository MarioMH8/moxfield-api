import { z } from 'zod';

import { testStrict } from '../../helpers';

const ColorPercentagesSchema = z.object({
	black: z.number(),
	blue: z.number(),
	green: z.number(),
	red: z.number(),
	white: z.number(),
});

export default testStrict(ColorPercentagesSchema);
