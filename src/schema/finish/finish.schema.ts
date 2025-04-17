import { z } from 'zod';

const FinishSchema = z.union([z.literal('nonFoil'), z.literal('foil'), z.literal('etched'), z.literal('glossy')]);

export default FinishSchema;
