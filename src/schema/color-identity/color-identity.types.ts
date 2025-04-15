import type z from 'zod';

import type ColorIdentitySchema from './color-identity.schema';

export type ColorIdentityType = z.infer<typeof ColorIdentitySchema>;
