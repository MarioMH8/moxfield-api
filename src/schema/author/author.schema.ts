import { z } from 'zod';

const AuthorSchema = z.object({
	badges: z.array(z.string()),
	displayName: z.string(),
	userName: z.string(),
});

export default AuthorSchema;
