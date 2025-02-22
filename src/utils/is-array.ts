// biome-ignore lint/suspicious/noExplicitAny: Needed in this case.
export function isArrayOfNumbers(arr: any): arr is number[] {
  if (!Array.isArray(arr)) return false
  return arr.every((item) => typeof item === 'number')
}

// biome-ignore lint/suspicious/noExplicitAny: Needed in this case.
export function isArrayOfDates(arr: any): arr is Date[] {
  if (!Array.isArray(arr)) return false
  return arr.every((item) => item instanceof Date)
}

// biome-ignore lint/suspicious/noExplicitAny: Needed in this case.
export function isArrayOfStrings(arr: any): arr is string[] {
  if (!Array.isArray(arr)) return false
  return arr.every((item) => typeof item === 'string')
}

// biome-ignore lint/suspicious/noExplicitAny: Needed in this case.
export function isArrayOfBooleans(arr: any): arr is boolean[] {
  if (!Array.isArray(arr)) return false
  return arr.every((item) => typeof item === 'boolean')
}
