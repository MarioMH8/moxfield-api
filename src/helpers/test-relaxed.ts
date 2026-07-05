import type { ZodType } from 'zod';

import isTest from './is-test';

export default function testRelaxed<StrictSchema extends ZodType>(
	strictSchema: StrictSchema,
	relaxedSchema: ZodType
): StrictSchema {
	if (isTest()) {
		return strictSchema;
	}

	return relaxedSchema as StrictSchema;
}
