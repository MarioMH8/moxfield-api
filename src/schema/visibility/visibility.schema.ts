import { z } from 'zod';

const VisibilitySchema = z.union([
	z.literal('unlisted'),
	z.literal('private'),
	z.literal('public'),
	z.literal('deleted'),
]);

export default VisibilitySchema;
