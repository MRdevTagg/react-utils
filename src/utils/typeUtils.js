/**
 * Checks if value is an array
 * @param {*} value - The value to check
 * @returns {boolean} Returns true if value is an array
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 * Checks if value is a boolean
 * @param {*} value - The value to check
 * @returns {boolean} Returns true if value is a boolean
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * Checks if value is a function
 * @param {*} value - The value to check
 * @returns {boolean} Returns true if value is a function
 */
export function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Checks if value is an object-like value
 * @param {*} value - The value to check
 * @returns {boolean} Returns true if value is object-like
 */
export function isObjectLike(value) {
  return typeof value === 'object' && value !== null;
}

/**
 * Checks if value is a plain object (created by {} or new Object())
 * @param {*} value - The value to check
 * @returns {boolean} Returns true if value is a plain object
 */
export function isPlainObject(value) {
  if (!isObjectLike(value) || Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}

/**
 * Checks if value is an Object
 * @param {*} value - The value to check
 * @returns {boolean} Returns true if value is an object
 */
export function isObject(value) {
  return value !== null && typeof value === 'object';
}
