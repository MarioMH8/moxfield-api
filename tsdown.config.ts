import { defineConfig } from 'tsdown';

export default defineConfig([
	{
		dts: true,
		entry: ['./src/moxfield-api.ts'],
		format: ['esm'],
		minify: false,
		sourcemap: false,
	},
]);
