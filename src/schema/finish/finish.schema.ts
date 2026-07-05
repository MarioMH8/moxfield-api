import { z } from 'zod';

import { testRelaxed } from '../../helpers';

const StrictFinishSchema = z.union([z.literal('nonFoil'), z.literal('foil'), z.literal('etched'), z.literal('glossy')]);

const FinishSchema = testRelaxed(StrictFinishSchema, z.string());

export default FinishSchema;
