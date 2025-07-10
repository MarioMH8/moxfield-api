export default function isTest(): boolean {
	// eslint-disable-next-line node/prefer-global/process
	return typeof process !== 'undefined' && process.env.NODE_ENV === 'test';
}
