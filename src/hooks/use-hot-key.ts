import { useEffect } from 'react'

/**
 * A React hook that listens for a specific keyboard shortcut (Ctrl/Cmd + key) and executes a callback when triggered.
 *
 * @param callback - The function to execute when the keyboard shortcut is triggered
 * @param key - The key that, when pressed together with Ctrl or Cmd, will trigger the callback
 *
 * @example
 * ```tsx
 * useHotKey(() => console.log('Shortcut triggered'), 's');
 * // Will log when user presses Ctrl/Cmd + S
 * ```
 */
export function useHotKey(callback: () => void, key: string): void {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === key && (e.metaKey || e.ctrlKey)) {
        // e.preventDefault();
        callback()
      }
    }

    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [key])
}
