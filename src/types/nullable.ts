/**
 * Type definition for Nullable.
 * @type {T | null | undefined} The type can be T, null, or undefined.
 * @template T The type of the value that can be null or undefined.
 */
export type Nullable<T> = null | T | undefined;
