import { describe, expect, it } from 'bun:test';

import type { FetcherType } from './fetcher.type';
import createRetryFetcher from './retry.fetcher';

describe('createRetryFetcher', () => {
	const successResponse = new Response('ok', { status: 200 });
	const rateLimitedResponse = new Response('rate-limited', { status: 429 });

	it('passes through non-429 responses unchanged', async () => {
		const fetcher = (() => Promise.resolve(successResponse)) as unknown as FetcherType;
		const retryFetcher = createRetryFetcher(fetcher);

		const result = await retryFetcher('https://example.com');

		expect(result).toBe(successResponse);
	});

	it('retries on 429 and eventually succeeds', async () => {
		let calls = 0;
		const fetcher = (() => {
			calls += 1;

			return Promise.resolve(calls < 3 ? rateLimitedResponse : successResponse);
		}) as unknown as FetcherType;
		const retryFetcher = createRetryFetcher(fetcher);

		const result = await retryFetcher('https://example.com');

		expect(result).toBe(successResponse);
		expect(calls).toBe(3);
	});

	it('gives up after maxRetries and returns the last 429 response', async () => {
		let calls = 0;
		const fetcher = (() => {
			calls += 1;

			return Promise.resolve(rateLimitedResponse);
		}) as unknown as FetcherType;
		const retryFetcher = createRetryFetcher(fetcher, 3, 1);

		const result = await retryFetcher('https://example.com');

		expect(result.status).toBe(429);
		expect(calls).toBe(3);
	});

	it('backs off using the Retry-After header', async () => {
		const start = Date.now();
		const fetcher = (() =>
			Promise.resolve(
				new Response('rate-limited', {
					headers: { 'Retry-After': '1' },
					status: 429,
				})
			)) as unknown as FetcherType;
		const retryFetcher = createRetryFetcher(fetcher, 2, 1);

		await retryFetcher('https://example.com');

		expect(Date.now() - start).toBeGreaterThanOrEqual(1000);
	}, 5000);
});
