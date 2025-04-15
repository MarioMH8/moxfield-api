import type z from 'zod';

import type FormatSchema from './format.schema';

export type FormatType = z.infer<typeof FormatSchema>;
