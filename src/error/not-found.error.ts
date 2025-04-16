import MoxfieldError from './moxfield.error';

export default class NotFoundMoxfieldError extends MoxfieldError {
	constructor(message?: string) {
		super(404, message);
	}
}
