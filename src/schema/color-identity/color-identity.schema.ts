import { z } from 'zod';

import { testRelaxed } from '../../helpers';

const StrictColorIdentitySchema = z.union([z.literal('W'), z.literal('U'), z.literal('B'), z.literal('R'), z.literal('G')]);

const ColorIdentitySchema = testRelaxed(StrictColorIdentitySchema, z.string());

export default ColorIdentitySchema;
