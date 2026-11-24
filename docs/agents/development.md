# Development and testing

Use the smallest command that validates the changed behavior.

## Commands

| Task                    | Command                                            |
|-------------------------|----------------------------------------------------|
| Install dependencies    | `bun install`                                      |
| Run unit tests          | `bun run test`                                     |
| Run integration tests   | `bun run test:integration`                         |
| Run the complete suite  | `bun run test:all`                                 |
| Test the API surface    | `bun test ./test/moxfield-api.test.ts`             |
| Test the fetcher        | `bun test ./src/fetcher/retry-fetcher.test.ts`     |
| Lint                    | `bun run lint`                                     |
| Fix lint issues         | `bun run lint:fix`                                 |
| Build                   | `bun run build`                                    |

## Test layout

- Unit tests live next to the source in `src/` and run in CI with `bun run test`.
- API-facing tests live in `test/` and exercise the public entry against the real Moxfield API. They are opt-in because the API can be blocked by Cloudflare from CI runners; run them with `bun run test:integration`.

## Before committing

Run `bun run lint:fix`. Pre-push hooks run `bun run test`, `bun run lint:fix`, and `bun run typecheck`.
