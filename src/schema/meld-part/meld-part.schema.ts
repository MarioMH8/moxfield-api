import { z } from 'zod';

const MeldPartSchema = z
	.object({
		id: z.string(),
		imageCardId: z.string(),
		imageCardIdIsCardFace: z.boolean(),
		name: z.string(),
		uniqueCardId: z.string(),
	})
	.strict();

export default MeldPartSchema;
