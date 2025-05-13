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
