import { defineConfig } from 'tsup';

export default defineConfig([
	{
		clean: true,
		dts: true,
		entry: ['./src/topdeck-api.ts'],
		format: ['esm'],
		minify: false,
		sourcemap: false,
	},
	{
		clean: false,
		dts: true,
		entry: ['./src/topdeck-api.ts'],
		format: ['cjs'],
		minify: false,
		sourcemap: false,
	},
	{
		clean: false,
		dts: false,
		entry: ['./src/topdeck-api.ts'],
		format: ['esm', 'cjs'],
		minify: true,
		outExtension({ format }) {
			return {
				js: `.min.${format === 'esm' ? 'js' : 'cjs'}`,
			};
		},
		sourcemap: false,
	},
]);
