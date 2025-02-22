const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
} as const

// Cache the formatter instance for better performance
const dateFormatter = new Intl.DateTimeFormat('en-US', DATE_FORMAT_OPTIONS)

function isValidDate(date: Date): boolean {
  return date instanceof Date && !Number.isNaN(date.getTime())
}

export function formatDate(value: Date | string | number): string {
  try {
    const date = value instanceof Date ? value : new Date(value)
    if (!isValidDate(date)) {
      return 'Invalid Date'
    }
    return dateFormatter.format(date)
  } catch {
    return 'Invalid Date'
  }
}

export function formatLatency(ms: number): string {
  if (ms >= 1000) {
    return `${new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(ms / 1000)}s`
  }

  return `${new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format(ms)}ms`
}

export function formatMilliseconds(value: number) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format(
    value,
  )
}

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
