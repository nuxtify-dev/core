// Adds or replaces an object element in an array
// Adapted from https://stackoverflow.com/questions/25764719/update-if-exists-or-add-new-element-to-array-of-objects-elegant-way-in-javascr
export const addOrReplaceArrayItem = (
  array: {
    id: string | number
    [key: string]: unknown
  }[],
  element: {
    id: string | number
    [key: string]: unknown
  },
) => {
  const i = array.findIndex((e: { [key: string]: unknown }) => e.id === element.id)
  if (i > -1) array[i] = element
  else array.push(element)
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
// https://stackoverflow.com/questions/1527803/how-to-generate-random-whole-numbers-in-javascript-in-a-specific-range
export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
