import type z from 'zod';

import type ColorIdentityPercentagesSchema from './color-identity-percentages.schema';

export type ColorIdentityPercentagesType = z.infer<typeof ColorIdentityPercentagesSchema>;
