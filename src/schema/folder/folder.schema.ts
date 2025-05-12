import { z } from 'zod';

const FolderSchema = z
	.object({
		id: z.string(),
		name: z.string(),
	})
	.strict();

export default FolderSchema;
