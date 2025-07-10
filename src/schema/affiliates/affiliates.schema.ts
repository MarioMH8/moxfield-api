import { z } from 'zod';

import { testStrict } from '../../helpers';

const AffiliatesSchema = z.object({
	ch: z.string(),
	ck: z.string(),
	cm: z.string(),
	csi: z.string(),
	ct: z.string(),
	scg: z.string(),
	tcg: z.string(),
});

export default testStrict(AffiliatesSchema);
