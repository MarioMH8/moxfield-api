import { MoxfieldError, NotFoundMoxfieldError, RateLimitedMoxfieldError } from '../error';
import type { FetcherType } from './fetcher.type';

export default function createMoxfieldFetcher<TFetcher extends FetcherType>(
	fetcher: TFetcher = fetch as TFetcher
): TFetcher {
	return async function moxfieldFetcher(...arguments_): Promise<unknown> {
		const response = await fetcher(...arguments_);

		if (response.ok) {
			return response.json();
		}
		if (response.status === 404) {
			throw new NotFoundMoxfieldError();
		}
		if (response.status === 429) {
			const retryAfterHeader = response.headers.get('Retry-After');
			const retryAfter = retryAfterHeader === null ? undefined : Number.parseInt(retryAfterHeader, 10);
			throw new RateLimitedMoxfieldError(retryAfter);
		}

		const object = (await response.json()) as object;
		const status = 'status' in object ? Number(object.status) : undefined;
		const error = 'error' in object ? String(object.error) : undefined;

		throw new MoxfieldError(status, error);
	} as TFetcher;
}
