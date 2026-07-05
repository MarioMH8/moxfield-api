import { z } from 'zod';

import { testRelaxed } from '../../helpers';

const StrictRaritySchema = z.union([
	z.literal('bonus'),
	z.literal('common'),
	z.literal('mythic'),
	z.literal('rare'),
	z.literal('special'),
	z.literal('uncommon'),
]);

const RaritySchema = testRelaxed(StrictRaritySchema, z.string());

export default RaritySchema;
