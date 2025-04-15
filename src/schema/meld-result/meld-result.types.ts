import type z from 'zod';

import type MeldResultSchema from './meld-result.schema';

export type MeldResultType = z.infer<typeof MeldResultSchema>;
