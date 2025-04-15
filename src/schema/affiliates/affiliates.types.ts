import type z from 'zod';

import type AffiliatesSchema from './affiliates.schema';

export type AffiliatesType = z.infer<typeof AffiliatesSchema>;
