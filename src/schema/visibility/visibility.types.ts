import type z from 'zod';

import type VisibilitySchema from './visibility.schema';

export type VisibilityType = z.infer<typeof VisibilitySchema>;
