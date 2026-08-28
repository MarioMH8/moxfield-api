---
'moxfield-api': minor
---

feat: add `DeckSearchApi` and `CardsNamedApi`

- `MoxfieldApi#deckSearch.search(options)` — single-page wrapper around the Moxfield decks search endpoint with full Zod-validated options (filter by commander, format, bracket, hub, deck name, author, partner/companion/contained cards, sortable by likes/views/updates/comments/colors/format/bracket, selectable SFW/NSFW endpoint via `sfw` flag).
- `MoxfieldApi#deckSearch.searchTop(options)` — convenience helper that auto-paginates across multiple search pages to aggregate up to `limit` results.
- `MoxfieldApi#cardsNamed.findByName(q, count)` and `findFirstByName(q)` — fuzzy card-name lookup.
