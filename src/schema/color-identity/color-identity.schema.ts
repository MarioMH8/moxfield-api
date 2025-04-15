import { z } from 'zod';

const ColorIdentitySchema = z.union([z.literal('W'), z.literal('U'), z.literal('B'), z.literal('R'), z.literal('G')]);

export default ColorIdentitySchema;
