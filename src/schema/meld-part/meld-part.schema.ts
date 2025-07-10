import { z } from 'zod';

import { testStrict } from '../../helpers';

const MeldPartSchema = z.object({
	id: z.string(),
	imageCardId: z.string(),
	imageCardIdIsCardFace: z.boolean(),
	name: z.string(),
	uniqueCardId: z.string(),
});

export default testStrict(MeldPartSchema);
