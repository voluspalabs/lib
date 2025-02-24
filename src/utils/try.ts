/**
 * Wraps a promise execution in a try-catch block and returns a standardized result object.
 *
 * @template T - The type of the value that the promise resolves to
 * @param promise - The promise to be handled
 * @returns An object containing:
 *  - `ok`: boolean indicating if the promise resolved successfully
 *  - `value`: The resolved value (null if promise rejected)
 *  - `error`: The caught error (null if promise resolved)
 *
 * @example
 * ```typescript
 * const result = await handleAsync(somePromise());
 * if (result.ok) {
 *   console.log(result.value);
 * } else {
 *   console.error(result.error);
 * }
 * ```
 */
async function handleAsync<T>(promise: Promise<T>): Promise<{
  ok: boolean
  value: T | null
  error: Error | null
}> {
  try {
    const data = await promise

    return {
      ok: true,
      value: data,
      error: null,
    }
  } catch (error) {
    return {
      ok: false,
      value: null,
      error: error instanceof Error ? error : new Error(String(error)),
    }
  }
}

export { handleAsync }
