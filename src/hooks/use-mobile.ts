'use client'
import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 768

/**
 * Custom hook to determine if the device is mobile based on the window width.
 *
 * @returns {boolean} True if the device is mobile, otherwise false.
 *
 * @example
 * const isMobile = useIsMobile();
 */
export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const mql = globalThis.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(globalThis.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(globalThis.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
