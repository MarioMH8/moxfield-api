import type { ZodTypeAny } from 'zod';

import isTest from './is-test';

export default function testRelaxed<StrictSchema extends ZodTypeAny>(
	strictSchema: StrictSchema,
	relaxedSchema: ZodTypeAny
): StrictSchema {
	if (isTest()) {
		return strictSchema;
	}

	return relaxedSchema as StrictSchema;
}
