import { z } from 'zod';

import { AuthorSchema } from '../author';
import { VisibilitySchema } from '../visibility';

const OriginalDeckSchema = z
	.object({
		authors: z.array(AuthorSchema),
		createdAtUtc: z.coerce.date(),
		createdByUser: AuthorSchema,
		id: z.string(),
		lastUpdatedAtUtc: z.coerce.date(),
		mainCardId: z.string().nullish(),
		mainCardIdIsBackFace: z.boolean(),
		mainCardIdIsCardFace: z.boolean(),
		name: z.string(),
		publicId: z.string(),
		visibility: VisibilitySchema,
	})
	.strict();

export default OriginalDeckSchema;
