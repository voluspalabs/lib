const DATE_TIME_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
} as const

const DATE_ONLY_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
} as const

// Cache the formatter instances for better performance
const dateTimeFormatter = new Intl.DateTimeFormat(
  'en-US',
  DATE_TIME_FORMAT_OPTIONS,
)
const dateOnlyFormatter = new Intl.DateTimeFormat(
  'en-US',
  DATE_ONLY_FORMAT_OPTIONS,
)

function isValidDate(date: Date): boolean {
  return date instanceof Date && !Number.isNaN(date.getTime())
}

/**
 * Formats a date and time value to a string.
 *
 * @param value - The date value to format. Can be a Date object, a string, or a number.
 * @returns A formatted date and time string. Returns 'Invalid Date' if the input cannot be converted to a valid date.
 *
 * @example
 * // Returns something like "Mar 12, 2023, 3:45 PM"
 * formatDateTime(new Date());
 *
 * @example
 * // Returns something like "Mar 12, 2023, 3:45 PM"
 * formatDateTime("2023-03-12T15:45:00");
 *
 * @example
 * // Returns "Invalid Date"
 * formatDateTime("not a date");
 */
export function formatDateTime(value: Date | string | number): string {
  try {
    const date = value instanceof Date ? value : new Date(value)
    if (!isValidDate(date)) {
      return 'Invalid Date'
    }
    return dateTimeFormatter.format(date)
  } catch {
    return 'Invalid Date'
  }
}

/**
 * Formats a date into a string representation.
 *
 * @param value - The date to format, can be a Date object, a string, or a number (timestamp)
 * @returns A formatted date string or 'Invalid Date' if the input cannot be converted to a valid date
 *
 * @example
 * // Returns formatted date string like "MM/DD/YYYY"
 * formatDate(new Date())
 *
 * @example
 * // Returns 'Invalid Date' for invalid inputs
 * formatDate('not a date')
 */
export function formatDate(value: Date | string | number): string {
  try {
    const date = value instanceof Date ? value : new Date(value)
    if (!isValidDate(date)) {
      return 'Invalid Date'
    }
    return dateOnlyFormatter.format(date)
  } catch {
    return 'Invalid Date'
  }
}

/**
 * Formats a latency value (in milliseconds) to a human-readable string.
 *
 * If the latency is greater than or equal to 1000ms, it's converted to seconds
 * with one decimal place (e.g., "1.2s").
 * Otherwise, it's formatted as milliseconds with up to three decimal places (e.g., "123.456ms").
 *
 * @param ms - The latency value in milliseconds to format
 * @returns A formatted string representing the latency with appropriate units
 *
 * @example
 * // Returns "1.5s"
 * formatLatency(1500)
 *
 * @example
 * // Returns "750ms"
 * formatLatency(750)
 */
export function formatLatency(ms: number): string {
  if (ms >= 1000) {
    return `${new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(ms / 1000)}s`
  }

  return `${new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format(ms)}ms`
}

/**
 * Formats a number representing milliseconds using the 'en-US' locale with a maximum of 3 decimal places.
 *
 * @param value - The number of milliseconds to format
 * @returns The formatted string representation of the milliseconds value
 *
 * @example
 * formatMilliseconds(1234.5678) // returns "1,234.568"
 */
export function formatMilliseconds(value: number) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format(
    value,
  )
}

/**
 * Formats a number into a compact string representation.
 *
 * - Numbers less than 100: Returns as is
 * - Numbers between 100 and 999: Returns as is
 * - Numbers between 1,000 and 999,999: Formats as "X.Xk" (e.g., 1,500 becomes "1.5k")
 * - Numbers 1,000,000 or greater: Formats as "X.XM" (e.g., 1,500,000 becomes "1.5M")
 *
 * @param value - The number to format
 * @returns The formatted string representation of the number
 */
export function formatCompactNumber(value: number) {
  if (value >= 100 && value < 1000) {
    return value.toString()
  }

  if (value >= 1000 && value < 1000000) {
    return `${(value / 1000).toFixed(1)}k`
  }

  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`
  }

  return value.toString()
}
