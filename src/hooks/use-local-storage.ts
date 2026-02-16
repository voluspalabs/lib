'use client'
import { useCallback, useEffect, useState } from 'react'

function getItemFromLocalStorage(key: string) {
  const item = globalThis?.localStorage.getItem(key)
  if (item) {
    return JSON.parse(item)
  }

  return null
}

// TODO: Improve and optimize
/**
 * A React hook that manages state in localStorage, syncing between memory and storage.
 *
 * @template T - The type of the value being stored
 * @param key - The key under which the value will be stored in localStorage
 * @param initialValue - The initial value to use if no value is found in localStorage
 * @returns A tuple containing the current value and a function to update it
 *
 * @example
 * ```tsx
 * const [value, setValue] = useLocalStorage('my-key', 'initial value');
 * // Later...
 * setValue('new value');
 * ```
 *
 * @remarks
 * - The hook will automatically load any existing value from localStorage on mount
 * - The stored value is automatically serialized/deserialized using JSON
 * - Works with both direct values and updater functions
 * - Safe for server-side rendering (checks for window existence)
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState(initialValue)

  useEffect(() => {
    // initialize
    if (typeof globalThis !== 'undefined') {
      const stored = getItemFromLocalStorage(key)
      if (stored !== null) {
        setStoredValue(stored)
      }
    }
  }, [key])

  const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (value) => {
      if (value instanceof Function) {
        setStoredValue((prev: T) => {
          const newValue = value(prev)
          // Save to localStorage
          globalThis.localStorage.setItem(key, JSON.stringify(newValue))
          return newValue
        })
      } else {
        setStoredValue(value)
        // Save to localStorage
        globalThis.localStorage.setItem(key, JSON.stringify(value))
      }
      return setStoredValue
    },
    [key, setStoredValue],
  )

  return [storedValue, setValue]
}
