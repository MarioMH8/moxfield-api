import { z } from 'zod';

const FinishSchema = z.union([z.literal('nonFoil'), z.literal('foil'), z.literal('etched')]);

export default FinishSchema;
