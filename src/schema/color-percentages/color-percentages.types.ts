import type z from 'zod';

import type ColorPercentagesSchema from './color-percentages.schema';

export type ColorPercentagesType = z.infer<typeof ColorPercentagesSchema>;
