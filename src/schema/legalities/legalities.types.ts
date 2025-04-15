import type z from 'zod';

import type LegalitiesSchema from './legalities.schema';

export type LegalitiesType = z.infer<typeof LegalitiesSchema>;
