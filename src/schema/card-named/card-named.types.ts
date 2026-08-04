import type z from 'zod';

import type CardNamedSchema from './card-named.schema';

export type CardNamedType = z.infer<typeof CardNamedSchema>;
