# Architecture

## Public surfaces

`src/moxfield-api.ts` is the single public entry and is bundled by `tsdown` into `dist/moxfield-api.mjs` (+ `dist/moxfield-api.d.mts`).

| Surface                                                       | Responsibility                                                                                     |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `deckList.findById(idOrUrl)`                                  | Fetches a deck by its Moxfield ID or a full deck URL; throws "not found" for unknown decks         |
| `deckSearch.search(query, options)` / `deckSearch.searchTop`  | Searches decks (optionally filtered by commander) with pagination and sort (`recent`, `mostLiked`, `mostViewed`) |
| `cardsNamed.findByName(name, limit)` / `findFirstByName`      | Looks up card metadata by name                                                                      |

## Internals

- `src/fetcher/` — fetch helpers, including `retry-fetcher` which retries HTTP 429 with `Retry-After`-aware backoff.
- `zod` + `zod-fetch` validate API responses against schemas before returning typed results.

## Build output

`tsdown.config.ts` emits a single ESM bundle (`format: ['esm']`, no minification, no sourcemaps). `package.json` exposes `dist` only, with `exports['.']` pointing at the `.mjs` bundle and its `.d.mts` declaration file.
