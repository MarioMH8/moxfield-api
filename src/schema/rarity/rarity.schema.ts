import { z } from 'zod';

const RaritySchema = z.union([
	z.literal('bonus'),
	z.literal('common'),
	z.literal('mythic'),
	z.literal('rare'),
	z.literal('special'),
	z.literal('uncommon'),
]);

export default RaritySchema;
