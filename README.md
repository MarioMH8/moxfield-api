![banner.png](.idea%2Fbanner.png)

<h1 align="center">
  moxfield-api
</h1>

<p align="center">
  A Javascript library for <a href='https://moxfield.com' target='_blank'>moxfield.com</a> written in Typescript.
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

[Copyright 2021-2025 MarioMH](./LICENSE)
