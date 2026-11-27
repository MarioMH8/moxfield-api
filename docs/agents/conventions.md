# Conventions

## Runtime and package management

Use Bun for package management, scripts, and tests. Do not add Node-specific scripts.

## Imports

There are no path aliases; use relative imports inside `src/`.

## Linting

ESLint uses `@hexadrop/eslint-config` through `eslint.config.js`. Run `bun run lint:fix` before committing.

## Versioning

Use Changesets. Every package behavior change needs `bun changeset add`.
