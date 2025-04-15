import { z } from 'zod';

import { CardSchema } from '../card';

const TokenMappingsSchema = z.record(z.string(), CardSchema);

export default TokenMappingsSchema;
