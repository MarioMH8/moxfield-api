import { beforeAll, describe, expect, it } from 'bun:test';

import type { CardsNamedType, DeckListType, DeckSearchType } from '../src';
import MoxfieldApi from '../src';
import NotFoundMoxfieldError from '../src/error/not-found.error';

const decks = [
	'zpF7IZNK1UOUm800YcNa8w',
	'AVn88Fg6wEKJlanM7hp-UQ',
	'zzpX3bf9HUWWyz3xfPLPSA',
	'sYPYT0j7e0ynfAhqQnQ34Q',
	'0eAo6mKFnkm33et94L9xcw',
	'JHJNPU26_U6DN9Pt7-EWhg',
	'gszeUVGkWEKJKI7IUvsV9g',
	'vh511ix7TUazHGSuH75fRw',
	'QXXHQKdslk-w1wF73huQJA',
	'3rSpv0GzX0uyTwZO-64tKQ',
	'jmxBjBorlESr7AUe-qEpdQ',
	'238SYpWztkeeibwf5XnBoA',
	'G8mskkjteES7TUUghfXX5w',
	'BAqsr-nr3EC-c3hW4DSSjw',
	'K3cp7XNcDkSXp-K6Eg7lhg',
	'ahaLbinAG0WBmcSu0rhc4Q',
	'https://moxfield.com/decks/f-K2-xxOhUW807uf1SdheA',
	'https://moxfield.com/decks/sepRQdrvuUG9ctVMBgepAA',
	'https://www.moxfield.com/decks/s65XSsJdRUqhZw4EmoedOA',
	'https://moxfield.com/decks/dp8QKvCr3EqGF9-qu5Zzfg',
	'https://moxfield.com/decks/pn2RZRo48EGUucqr4CTCPA',
];

const notFound = [
	/*
	 * 'https://moxfield.com/decks/PwGdlurB3EGDJ6HbDRx-2g',
	 * 'https://www.moxfield.com/decks/f29zyYl6IkSZlYxS2IMA8Q',
	 * 'https://moxfield.com/decks/oww8YuIatkaj25VXdvf8xQ',
	 */
	'9KgA_iH0nUiKkAn8W4g7yw',
	'2jDFBmNQbUuNd0hCXAdN-Q',
	'dP3gY_Q4HUKiJwSpbbxHiQ',
	'wm7tBo47yE6Cs8e8yG3pxQ',
	'vbwntQA3vEe5t09mkytqEw',
	'_8XUkF8UV0-tNS-a-yhNJg',
	'W7zhmkL7lU25QcCyn3EPhw',
	'r1UXi2eZ7EqH8Ja3G4-SHA',
	'q6fGFZsn-kyEkFk-uPVbCg',
	'https://moxfield.com/decks/AS-5NUNKi0yCxNtTasmF7g',
];

describe('moxfield-api', () => {
	let api: MoxfieldApi;
	beforeAll(() => {
		api = new MoxfieldApi();
	});
	describe('deckList', () => {
		describe.each(decks)(`findById('%s')`, id => {
			it('should works as expected', () => {
				let deckList: DeckListType | undefined;
				expect(async () => {
					deckList = await api.deckList.findById(id);
				}).not.toThrow();

				expect(deckList).toBeDefined();
			}, 10_000);
		});
		describe.each(notFound)(`findById('%s')`, id => {
			it('should throw not found', () => {
				const findById = async () => {
					await api.deckList.findById(id);
				};
				const expectedError = new NotFoundMoxfieldError();
				expect(findById).toThrow(expectedError);
				expect(findById).toThrow(NotFoundMoxfieldError);
			});
		});
	});

	describe('deckSearch', () => {
		describe('search', () => {
			it('should return paginated results for a known commander', async () => {
				const result: DeckSearchType = await api.deckSearch.search({
					// Ozai, the Phoenix King
					commanderCardId: 'b5Xg6',
					fmt: 'commander',
					pageNumber: 1,
					pageSize: 10,
				});

				expect(result.pageNumber).toBe(1);
				expect(result.pageSize).toBe(10);
				expect(result.totalResults).toBeGreaterThan(0);
				expect(result.totalPages).toBeGreaterThan(0);
				expect(result.data.length).toBeGreaterThan(0);
			}, 10_000);

			it('each result should have required fields', async () => {
				const result: DeckSearchType = await api.deckSearch.search({
					commanderCardId: 'b5Xg6',
					fmt: 'commander',
					pageSize: 5,
				});

				for (const deck of result.data) {
					expect(deck.id).toBeDefined();
					expect(deck.name).toBeDefined();
					expect(deck.format).toBe('commander');
					expect(deck.publicId).toBeDefined();
					expect(typeof deck.mainboardCount).toBe('number');
					expect(typeof deck.likeCount).toBe('number');
				}
			}, 10_000);

			it('limit should control the number of results returned', async () => {
				const result: DeckSearchType = await api.deckSearch.search({
					commanderCardId: 'b5Xg6',
					limit: 3,
				});

				expect(result.pageSize).toBe(3);
				expect(result.data.length).toBeLessThanOrEqual(3);
			}, 10_000);

			it('limit returns exactly the requested number of results when sufficient results exist', async () => {
				const limit = 7;
				const result: DeckSearchType = await api.deckSearch.search({
					commanderCardId: 'b5Xg6',
					limit,
				});

				expect(result.data.length).toBe(limit);
			}, 10_000);

			it('limit spanning multiple pages aggregates results without duplicates', async () => {
				const limit = 12;
				const result: DeckSearchType = await api.deckSearch.search({
					fmt: 'commander',
					limit,
					pageSize: 5,
					sort: 'mostViewed',
				});

				expect(result.data.length).toBe(limit);
				const uniqueIds = new Set(result.data.map(d => d.id));
				expect(uniqueIds.size).toBe(limit);
			}, 15_000);

			it('sort: "recent" should return results ordered by most recently updated', async () => {
				const result: DeckSearchType = await api.deckSearch.search({
					commanderCardId: 'b5Xg6',
					limit: 10,
					sort: 'recent',
				});

				expect(result.data.length).toBeGreaterThan(1);
				const firstDate = result.data.at(0)?.lastUpdatedAtUtc ?? new Date(0);
				const lastDate = result.data.at(-1)?.lastUpdatedAtUtc ?? new Date(0);
				expect(firstDate.getTime()).toBeGreaterThanOrEqual(lastDate.getTime());
			}, 10_000);

			it('sort: "mostLiked" should return results ordered by descending like count', async () => {
				const result: DeckSearchType = await api.deckSearch.search({
					commanderCardId: 'b5Xg6',
					limit: 10,
					sort: 'mostLiked',
				});

				expect(result.data.length).toBeGreaterThan(1);
				for (let index = 0; index < result.data.length - 1; index++) {
					expect(result.data[index].likeCount).toBeGreaterThanOrEqual(result.data[index + 1].likeCount);
				}
			}, 10_000);

			it('sort: "mostViewed" should return results ordered by descending view count', async () => {
				const result: DeckSearchType = await api.deckSearch.search({
					commanderCardId: 'b5Xg6',
					limit: 10,
					sort: 'mostViewed',
				});

				expect(result.data.length).toBeGreaterThan(1);
				for (let index = 0; index < result.data.length - 1; index++) {
					expect(result.data[index].viewCount).toBeGreaterThanOrEqual(result.data[index + 1].viewCount);
				}
			}, 10_000);
		});
	});

	describe('cardsNamed', () => {
		describe('findByName', () => {
			it('should return matching cards respecting the count limit', async () => {
				const result: CardsNamedType = await api.cardsNamed.findByName('Ozai', 5);

				expect(result.cards.length).toBeGreaterThan(0);
				expect(result.cards.length).toBeLessThanOrEqual(5);
			}, 10_000);

			it('each card should have required fields', async () => {
				const result: CardsNamedType = await api.cardsNamed.findByName('Ozai', 3);

				for (const card of result.cards) {
					expect(card.id).toBeDefined();
					expect(card.name).toBeDefined();
					expect(card.scryfall_id).toBeDefined();
				}
			}, 10_000);
		});

		describe('findFirstByName', () => {
			it('should return the correct card for an exact name', async () => {
				const card = await api.cardsNamed.findFirstByName('Ozai, the Phoenix King');

				expect(card).toBeDefined();
				expect(card?.name).toBe('Ozai, the Phoenix King');
				expect(card?.id).toBeDefined();
			}, 10_000);

			it('returned card id should be usable in deckSearch', async () => {
				const card = await api.cardsNamed.findFirstByName('Ozai, the Phoenix King');

				expect(card).toBeDefined();

				const result: DeckSearchType = await api.deckSearch.search({
					commanderCardId: card?.id,
					fmt: 'commander',
					pageSize: 5,
				});

				expect(result.totalResults).toBeGreaterThan(0);
				expect(result.data.length).toBeGreaterThan(0);
			}, 10_000);
		});
	});
});
