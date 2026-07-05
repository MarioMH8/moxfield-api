import { z } from 'zod';

import { testRelaxed } from '../../helpers';

const StrictVisibilitySchema = z.union([
	z.literal('unlisted'),
	z.literal('private'),
	z.literal('public'),
	z.literal('deleted'),
]);

const VisibilitySchema = testRelaxed(StrictVisibilitySchema, z.string());

export default VisibilitySchema;
