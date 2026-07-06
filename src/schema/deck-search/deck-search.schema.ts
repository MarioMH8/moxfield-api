import { z } from 'zod';

import { testStrict } from '../../helpers';
import { DeckSearchItemSchema } from '../deck-search-item';

const DeckSearchSchema = z.object({
	data: z.array(DeckSearchItemSchema),
	pageNumber: z.number(),
	pageSize: z.number(),
	totalPages: z.number(),
	totalResults: z.number(),
});

export default testStrict(DeckSearchSchema);
