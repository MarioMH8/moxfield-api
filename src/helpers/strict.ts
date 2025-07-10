import type { ZodObject } from 'zod';
import z from 'zod';
import type { $ZodLooseShape, util } from 'zod/v4/core';

import isTest from './is-test';

export default function conditionalStrict<Shape extends $ZodLooseShape, O extends ZodObject<util.Writeable<Shape>>>(
	schema: O
): O | ReturnType<typeof z.strictObject<Shape>> {
	if (isTest()) {
		return z.strictObject(schema.shape);
	}

	return schema;
}
