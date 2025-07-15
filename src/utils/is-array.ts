/**
 * Checks if the provided value is an array that contains only numbers.
 *
 * This function is a type guard that narrows the type of the input to `number[]` when it returns true.
 *
 * @param arr - The value to check
 * @returns A boolean indicating whether the input is an array of numbers, and a type predicate for TypeScript
 *
 * @example
 * ```typescript
 * if (isArrayOfNumbers(value)) {
 *   // TypeScript knows that value is number[] here
 *   const sum = value.reduce((a, b) => a + b, 0);
 * }
 * ```
 */
// biome-ignore lint/suspicious/noExplicitAny: Needed in this case.
export function isArrayOfNumbers(arr: any): arr is number[] {
  if (!Array.isArray(arr)) {
    return false
  }
  return arr.every((item) => typeof item === 'number')
}

/**
 * Checks if the provided value is an array of Date objects.
 *
 * @param arr - The value to check
 * @returns A type predicate indicating whether the value is an array of Date objects
 *
 * @example
 * ```ts
 * const dates = [new Date(), new Date()];
 * if (isArrayOfDates(dates)) {
 *   // dates is typed as Date[]
 *   const firstDate = dates[0];
 * }
 * ```
 */
// biome-ignore lint/suspicious/noExplicitAny: Needed in this case.
export function isArrayOfDates(arr: any): arr is Date[] {
  if (!Array.isArray(arr)) {
    return false
  }
  return arr.every((item) => item instanceof Date)
}

/**
 * Checks if the provided value is an array of strings.
 *
 * @param arr - The value to check
 * @returns A type predicate indicating whether the value is a string array
 *
 * @example
 * ```typescript
 * isArrayOfStrings(['hello', 'world']); // true
 * isArrayOfStrings(['hello', 123]); // false
 * isArrayOfStrings('not an array'); // false
 * ```
 */
// biome-ignore lint/suspicious/noExplicitAny: Needed in this case.
export function isArrayOfStrings(arr: any): arr is string[] {
  if (!Array.isArray(arr)) {
    return false
  }
  return arr.every((item) => typeof item === 'string')
}

/**
 * Checks if the provided value is an array of booleans.
 *
 * @param arr - The value to check
 * @returns A type predicate indicating whether the value is a boolean array
 *
 * @example
 * ```typescript
 * isArrayOfBooleans([true, false]); // returns true
 * isArrayOfBooleans(['true', false]); // returns false
 * isArrayOfBooleans('not an array'); // returns false
 * ```
 */
// biome-ignore lint/suspicious/noExplicitAny: Needed in this case.
export function isArrayOfBooleans(arr: any): arr is boolean[] {
  if (!Array.isArray(arr)) {
    return false
  }
  return arr.every((item) => typeof item === 'boolean')
}
