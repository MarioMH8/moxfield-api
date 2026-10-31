# Development and testing

Use the smallest command that validates the changed behavior.

## Commands

| Task                 | Command                                            |
|----------------------|----------------------------------------------------|
| Install dependencies | `bun install`                                      |
| Run the full suite   | `bun run test`                                     |
| Test the API surface | `bun test ./test/moxfield-api.test.ts`             |
| Test the fetcher     | `bun test ./src/fetcher/retry-fetcher.test.ts`     |
| Lint                 | `bun run lint`                                     |
| Fix lint issues      | `bun run lint:fix`                                 |
| Build                | `bun run build`                                    |

## Test layout

- API-facing tests live in `test/` and exercise the public entry against the real Moxfield API.
- Unit tests for the retry fetcher live next to the source in `src/fetcher/`.

## Before committing

Run `bun run lint:fix`. Pre-push hooks run `bun run test`, `bun run lint:fix`, and `bun run typecheck`.
