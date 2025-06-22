import { beforeAll, describe, expect, it } from 'bun:test';

import type { DeckListType } from '../src';
import MoxfieldApi from '../src';
import NotFoundMoxfieldError from '../src/error/not-found.error';

const decks = [
	'9KgA_iH0nUiKkAn8W4g7yw',
	'zpF7IZNK1UOUm800YcNa8w',
	'AVn88Fg6wEKJlanM7hp-UQ',
	'zzpX3bf9HUWWyz3xfPLPSA',
	'sYPYT0j7e0ynfAhqQnQ34Q',
	'2jDFBmNQbUuNd0hCXAdN-Q',
	'dP3gY_Q4HUKiJwSpbbxHiQ',
	'wm7tBo47yE6Cs8e8yG3pxQ',
	'vbwntQA3vEe5t09mkytqEw',
	'0eAo6mKFnkm33et94L9xcw',
	'JHJNPU26_U6DN9Pt7-EWhg',
	'gszeUVGkWEKJKI7IUvsV9g',
	'vh511ix7TUazHGSuH75fRw',
	'QXXHQKdslk-w1wF73huQJA',
	'3rSpv0GzX0uyTwZO-64tKQ',
	'cfMQrOvVLUukZc_nDEoHKg',
	'jmxBjBorlESr7AUe-qEpdQ',
	'238SYpWztkeeibwf5XnBoA',
	'G8mskkjteES7TUUghfXX5w',
	'BAqsr-nr3EC-c3hW4DSSjw',
	'K3cp7XNcDkSXp-K6Eg7lhg',
	'_8XUkF8UV0-tNS-a-yhNJg',
	'W7zhmkL7lU25QcCyn3EPhw',
	'r1UXi2eZ7EqH8Ja3G4-SHA',
	'q6fGFZsn-kyEkFk-uPVbCg',
	'ahaLbinAG0WBmcSu0rhc4Q',
	'https://moxfield.com/decks/f-K2-xxOhUW807uf1SdheA',
	'https://moxfield.com/decks/sepRQdrvuUG9ctVMBgepAA',
	'https://www.moxfield.com/decks/s65XSsJdRUqhZw4EmoedOA',
	'https://moxfield.com/decks/dp8QKvCr3EqGF9-qu5Zzfg',
];

const notFound = [
	/*
	 * 'https://moxfield.com/decks/PwGdlurB3EGDJ6HbDRx-2g',
	 * 'https://www.moxfield.com/decks/f29zyYl6IkSZlYxS2IMA8Q',
	 * 'https://moxfield.com/decks/oww8YuIatkaj25VXdvf8xQ',
	 */
	'https://moxfield.com/decks/AS-5NUNKi0yCxNtTasmF7g',
	'https://moxfield.com/decks/pn2RZRo48EGUucqr4CTCPA',
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
});
