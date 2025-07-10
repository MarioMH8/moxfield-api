import { z } from 'zod';

import { testStrict } from '../../helpers';

const HubSchema = z.object({
	description: z.string(),
	name: z.string(),
});

export default testStrict(HubSchema);
