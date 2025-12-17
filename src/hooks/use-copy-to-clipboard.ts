'use client'
import { useCallback, useState } from 'react'
import { toast } from 'sonner'

/**
 * A custom React hook that provides functionality to copy text to the clipboard.
 *
 * @returns An object containing:
 * - `text` - The currently copied text or null if nothing is copied
 * - `copy` - An async function to copy text to clipboard
 * - `isCopied` - A boolean indicating if text is currently copied
 *
 * @example
 * ```tsx
 * const { copy, isCopied } = useCopyToClipboard();
 *
 * // Basic usage
 * await copy('Text to copy');
 *
 * // With toast notification
 * await copy('Text to copy', { withToast: true });
 *
 * // With custom timeout
 * await copy('Text to copy', { timeout: 5000 });
 * ```
 *
 * @remarks
 * The hook provides a timeout mechanism to automatically clear the copied state
 * and an optional toast notification system.
 *
 * @param options.timeout - Duration in milliseconds before clearing the copied state (default: 3000)
 * @param options.withToast - Whether to show a toast notification when copy is successful (default: false)
 */
export function useCopyToClipboard() {
  const [text, setText] = useState<string | null>(null)

  const copy = useCallback(
    (
      text: string,
      { timeout, withToast }: { timeout?: number; withToast?: boolean } = {
        timeout: 3000,
        withToast: false,
      },
    ) => {
      if (!navigator?.clipboard) {
        // Clipboard not supported
        return false
      }

      try {
        navigator.clipboard.writeText(text)
        setText(text)

        if (timeout) {
          setTimeout(() => {
            setText(null)
          }, timeout)
        }

        if (withToast) {
          toast.success('Copied to clipboard')
        }

        return true
        // REASON: Added _ because its not used.
      } catch (_error) {
        // Copy failed
        setText(null)
        return false
      }
    },
    [],
  )

  return { text, copy, isCopied: text !== null }
}
