export default class MoxfieldError extends Error {
	constructor(
		readonly status: number | undefined,
		message: string | undefined
	) {
		super(message);
	}
}
