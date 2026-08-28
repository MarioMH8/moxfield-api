import MoxfieldError from './moxfield.error';

export default class RateLimitedMoxfieldError extends MoxfieldError {
	constructor(
		readonly retryAfter: number | undefined,
		message: string | undefined = 'rate limited'
	) {
		super(429, message);
		this.retryAfter = retryAfter;
	}
}
