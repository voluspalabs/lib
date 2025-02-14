import { useEffect, useState } from 'react'

/**
 * Custom hook to debounce a changing value.
 *
 * This hook delays updating the debounced value until after the specified delay.
 * It is useful for filtering rapid state changes, such as input changes,
 * and only applying the final value.
 *
 * @param value - The value to debounce.
 * @param delay - The debounce delay in milliseconds (default is 500ms).
 * @returns The debounced value.
 *
 * @example
 * const debouncedSearchTerm = useDebounce(searchTerm, 300);
 */
export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay ?? 500)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
