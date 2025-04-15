import type z from 'zod';

import type HubSchema from './hub.schema';

export type HubType = z.infer<typeof HubSchema>;
