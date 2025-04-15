import type z from 'zod';

import type CardFaceSchema from './card-face.schema';

export type CardFaceType = z.infer<typeof CardFaceSchema>;
