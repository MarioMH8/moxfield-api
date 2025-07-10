import { z } from 'zod';

import { testStrict } from '../../helpers';

const FolderSchema = z.object({
	id: z.string(),
	name: z.string(),
});

export default testStrict(FolderSchema);
