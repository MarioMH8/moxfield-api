import type z from 'zod';

import type ViewSettingsSchema from './view-settings.schema';

export type ViewSettingsType = z.infer<typeof ViewSettingsSchema>;
