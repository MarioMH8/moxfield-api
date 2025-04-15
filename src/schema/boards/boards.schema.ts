import { z } from 'zod';

import { BoardSchema } from '../board';

const BoardTypesSchema = z.union([
	z.literal('attractions'),
	z.literal('commanders'),
	z.literal('companions'),
	z.literal('contraptions'),
	z.literal('mainboard'),
	z.literal('maybeboard'),
	z.literal('planes'),
	z.literal('schemes'),
	z.literal('sideboard'),
	z.literal('signatureSpells'),
	z.literal('stickers'),
	z.literal('tokens'),
]);

const BoardsSchema = z.record(BoardTypesSchema, BoardSchema);

export default BoardsSchema;
