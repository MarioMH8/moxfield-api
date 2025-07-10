import z from 'zod';
import type { $ZodLooseShape } from 'zod/v4/core';

import isTest from './is-test';

export default function conditionalStrict<T extends $ZodLooseShape>(
	schema: T
): ReturnType<typeof z.strictObject<T>> | T {
	if (isTest()) {
		return z.strictObject(schema);
	}

	return schema;
}
