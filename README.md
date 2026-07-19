![banner.png](.idea%2Fbanner.png)

<h1 align="center">
  moxfield-api
</h1>

<p align="center">
  A JavaScript library for <a href='https://moxfield.com' target='_blank'>moxfield.com</a> written in TypeScript.
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/moxfield-api" rel="nofollow">
        <img src="https://img.shields.io/npm/v/moxfield-api?style=flat-square" alt="npm" style="max-width: 100%;">
    </a>
    <a href="https://github.com/MarioMH8/moxfield-api">
        <img src="https://img.shields.io/github/issues/mariomh8/moxfield-api?style=flat-square" alt="GitHub issues" style="max-width: 100%;">
    </a>
</p>

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
    - [Decklist](#decklist)
        - [`findById(id: string): Promise<DeckListType>`](#findbyidid-string-promisedecklisttype)
    - [Deck Search](#deck-search)
        - [`search(options?: DeckSearchOptions): Promise<DeckSearchType>`](#searchoptions-decksearchoptions-promisedecksearchtype)
    - [Cards Named](#cards-named)
        - [`findByName(q: string, count?: number): Promise<CardsNamedType>`](#findbynameq-string-count-number-promisecardsnamedtype)
        - [`findFirstByName(q: string): Promise<CardNamedType | undefined>`](#findfirstbynameq-string-promisecardnamedtype--undefined)
- [Contributing](#contributing)

## Installation

```bash
npm install --save moxfield-api
```

**Using bun**

```bash
bun add moxfield-api
```

## Documentation

### Decklist

#### `findById(id: string): Promise<DeckListType>`

```typescript
import MoxfieldApi from 'moxfield-api';

const moxfield = new MoxfieldApi();

const decklist = await moxfield.decklist.findById('https://moxfield.com/decks/oEWXWHM5eEGMmopExLWRCA'); // OR oEWXWHM5eEGMmopExLWRCA
```

### Deck Search

#### `search(options?: DeckSearchOptions): Promise<DeckSearchType>`

Searches for decks with optional filtering and sorting. When `limit` is provided the method automatically paginates across multiple pages (fetching remaining pages in parallel) and returns exactly `limit` results.

```typescript
import MoxfieldApi from 'moxfield-api';

const moxfield = new MoxfieldApi();

// Single page
const results = await moxfield.deckSearch.search({ fmt: 'commander', pageSize: 20 });

// Auto-paginate — fetches as many pages as needed to return 150 results
const bulk = await moxfield.deckSearch.search({ fmt: 'commander', limit: 150 });

// Filter by commander card, sorted by most liked
const ozaiDecks = await moxfield.deckSearch.search({
  commanderCardId: 'b5Xg6',
  fmt: 'commander',
  limit: 50,
  sort: 'mostLiked',
});
```

| Option | Type | Description |
|---|---|---|
| `limit` | `number` | Total results to return, auto-paginating as needed |
| `pageNumber` | `number` | Starting page (default: `1`) |
| `pageSize` | `number` | Results per page when paginating (default: `min(limit, 100)`) |
| `fmt` | `string` | Format filter (e.g. `commander`, `standard`) |
| `q` | `string` | Free-text search query |
| `commanderCardId` | `string` | Filter by commander card ID |
| `sort` | `'mostLiked' \| 'mostViewed' \| 'recent'` | Convenience sort shorthand |
| `sortType` | `'created' \| 'likes' \| 'updated' \| 'views'` | Sort field |
| `sortDirection` | `'ascending' \| 'descending'` | Sort direction |
| `minBracket` | `number` | Minimum bracket filter |
| `maxBracket` | `number` | Maximum bracket filter |

### Cards Named

#### `findByName(q: string, count?: number): Promise<CardsNamedType>`

Fuzzy card name search. Returns up to `count` matching cards (default: `10`).

```typescript
import MoxfieldApi from 'moxfield-api';

const moxfield = new MoxfieldApi();

const results = await moxfield.cardsNamed.findByName('Ozai', 5);
```

#### `findFirstByName(q: string): Promise<CardNamedType | undefined>`

Returns the single best match for a card name, or `undefined` if none found.

```typescript
import MoxfieldApi from 'moxfield-api';

const moxfield = new MoxfieldApi();

const card = await moxfield.cardsNamed.findFirstByName('Ozai, the Phoenix King');
```

## Contributing

This project uses [Bun](https://bun.sh) as a runtime, test runner and bundler.

Thanks for wanting to help out! Here's the setup you'll have to do:

Clone the project

```bash
git clone git@github.com:MarioMH8/moxfield-api.git
```

Go to the project directory

```bash
cd moxfield-api
```

Install dependencies

```bash
bun install
```

Compile the project

```bash
bun run build
```

## MIT License

[Copyright 2021-2026 MarioMH](./LICENSE)
