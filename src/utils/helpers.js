export const isUndefinedOrNull = input => input === undefined || input === null

export const isEmptyString = input =>
  typeof input === 'string' && input.length === 0
