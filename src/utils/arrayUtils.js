/**
 * Returns the first element of an array
 * @param {Array} array - The array to query
 * @returns The first element of the array
 */
export function first(array) {
  return Array.isArray(array) ? array[0] : undefined;
}

/**
 * Returns the last element of an array
 * @param {Array} array - The array to query
 * @returns The last element of the array
 */
export function last(array) {
  return Array.isArray(array) ? array[array.length - 1] : undefined;
}

/**
 * Creates a duplicate-free version of an array
 * @param {Array} array - The array to inspect
 * @returns New duplicate-free array
 */
export function uniq(array) {
  return Array.isArray(array) ? [...new Set(array)] : [];
}

/**
 * Creates a slice of array with n elements taken from the beginning
 * @param {Array} array - The array to query
 * @param {number} [n=1] - The number of elements to take
 * @returns The slice of the array
 */
export function take(array, n = 1) {
  if (!Array.isArray(array)) return [];
  return array.slice(0, n);
}
