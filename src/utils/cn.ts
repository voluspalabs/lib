import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges multiple Tailwind CSS class values into a single string.
 *
 * Uses clsx to conditionally apply classes and tailwind-merge to merge conflicting classes.
 *
 * @param inputs A list of class value inputs (strings, arrays, or objects).
 * @returns The merged class names as a string.
 *
 * @example
 * const buttonClass = cn(
 *   'px-4 py-2 rounded',
 *   { 'bg-blue-500 text-white': isPrimary },
 *   additionalClasses
 * );
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))
