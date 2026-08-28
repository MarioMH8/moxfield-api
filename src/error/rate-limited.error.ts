import MoxfieldError from './moxfield.error';

export default class RateLimitedMoxfieldError extends MoxfieldError {
	constructor(message: string | undefined = 'rate limited') {
		super(429, message);
	}
}
