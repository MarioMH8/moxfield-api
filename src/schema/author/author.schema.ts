import { z } from 'zod';

const AuthorSchema = z
	.object({
		badges: z.array(z.string()),
		displayName: z.string(),
		profileImageUrl: z.url().nullish(),
		promos: z.array(z.unknown()).nullish(),
		userName: z.string(),
	})
	.strict();

export default AuthorSchema;
