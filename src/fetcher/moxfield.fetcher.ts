import { MoxfieldError, NotFoundMoxfieldError, RateLimitedMoxfieldError } from '../error';
import type { FetcherType } from './fetcher.type';

const MAX_RETRIES = 3;
const RETRY_BACKOFF_MS = 1000;

async function sleep(ms: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

export default function createMoxfieldFetcher<TFetcher extends FetcherType>(
	fetcher: TFetcher = fetch as TFetcher
): TFetcher {
	return async function moxfieldFetcher(...arguments_): Promise<unknown> {
		let lastError: unknown;
		for (let attempt = 0; attempt < MAX_RETRIES; attempt += 1) {
			// eslint-disable-next-line no-await-in-loop -- retry backoff on 429
			const response = await fetcher(...arguments_);

			if (response.ok) {
				return response.json();
			}
			if (response.status === 404) {
				throw new NotFoundMoxfieldError();
			}
			if (response.status === 429) {
				const retryAfter = Number.parseInt(
					response.headers.get('Retry-After') ?? String(RETRY_BACKOFF_MS / 1000),
					10
				);
				lastError = new RateLimitedMoxfieldError();
				if (attempt < MAX_RETRIES - 1) {
					// eslint-disable-next-line no-await-in-loop -- intentional retry backoff
					await sleep(Math.max(retryAfter * 1000, RETRY_BACKOFF_MS));
					continue;
				}
				throw lastError;
			}

			// eslint-disable-next-line no-await-in-loop -- only reached for non-429 errors
			const object = (await response.json()) as object;
			const status = 'status' in object ? Number(object.status) : undefined;
			const error = 'error' in object ? String(object.error) : undefined;

			throw new MoxfieldError(status, error);
		}
		throw lastError;
	} as TFetcher;
}
