/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
	'*': 'bun run lint:fix',
	'*.test.ts': 'bun test',
};

export default config;
