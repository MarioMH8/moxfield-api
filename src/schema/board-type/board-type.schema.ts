import { z } from 'zod';

import { testRelaxed } from '../../helpers';

const StrictBoardTypesSchema = z.union([
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

const BoardTypesSchema = testRelaxed(StrictBoardTypesSchema, z.string());

export default BoardTypesSchema;
