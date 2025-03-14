'use client'
import { useEffect, useState } from 'react'

/**
 * A React hook that monitors a media query and returns its current match state.
 *
 * @param query - A string representing the media query to evaluate (e.g., '(min-width: 768px)')
 * @returns A boolean indicating whether the media query currently matches
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * ```
 */
export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener('change', onChange)
    setValue(result.matches)

    return () => result.removeEventListener('change', onChange)
  }, [query])

  return value
}
