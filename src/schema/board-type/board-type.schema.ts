import { z } from 'zod';

const BoardTypesSchema = z.union([
	z.literal('attractions'),
	z.literal('commanders'),
	z.literal('companions'),
	z.literal('contraptions'),
	z.literal('mainboard'),
	z.literal('maybeboard'),
	z.literal('partners'),
	z.literal('planes'),
	z.literal('schemes'),
	z.literal('sideboard'),
	z.literal('signatureSpells'),
	z.literal('stickers'),
	z.literal('tokens'),
]);

export default BoardTypesSchema;
