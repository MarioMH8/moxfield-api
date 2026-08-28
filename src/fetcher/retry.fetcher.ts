import type { FetcherType } from './fetcher.type';

async function sleep(ms: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

export default function createRetryFetcher(fetcher: FetcherType, maxRetries = 3, backoffMs = 1000): FetcherType {
	return (async (...arguments_: Parameters<FetcherType>): Promise<Response> => {
		let response: Response | undefined;

		for (let attempt = 0; attempt < maxRetries; attempt += 1) {
			// eslint-disable-next-line no-await-in-loop
			response = await fetcher(...arguments_);
			if (response.ok || response.status !== 429) {
				return response;
			}
			const retryAfter = Number.parseInt(response.headers.get('Retry-After') ?? String(backoffMs / 1000), 10);
			// eslint-disable-next-line no-await-in-loop
			await sleep(Math.max(retryAfter * 1000, backoffMs));
		}

		if (response === undefined) {
			throw new TypeError('fetcher did not produce a response');
		}

		return response;
	}) as FetcherType;
}
