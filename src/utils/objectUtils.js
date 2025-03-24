import { isArray } from './typeUtils';

/**
 * Checks if value is null or undefined
 * @param {*} value - The value to check
 * @returns {boolean} Returns true if value is nullish
 */
export function isNil(value) {
  return value === null || value === undefined;
}

/**
 * Creates an object composed of picked object properties
 * @param {Object} object - The source object
 * @param {string[]} paths - The property paths to pick
 * @returns {Object} Returns the new object
 */
export function pick(object, paths) {
  const result = {};
  
  if (!object || typeof object !== 'object') {
    return result;
  }
  
  for (const path of paths) {
    if (Object.prototype.hasOwnProperty.call(object, path)) {
      result[path] = object[path];
    }
  }
  
  return result;
}

/**
 * Assigns own enumerable properties of source objects to the destination object
 * @param {Object} object - The destination object
 * @param {...Object} sources - The source objects
 * @returns {Object} The destination object
 */
export function assign(object, ...sources) {
  if (object == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  
  const result = Object(object);
  
  for (const source of sources) {
    if (source != null) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          result[key] = source[key];
        }
      }
    }
  }
  
  return result;
}

/**
 * Merges objects recursively with customization
 * @param {Object} object - The destination object
 * @param {...Object} sources - The source objects
 * @param {Function} customizer - The function to customize assigned values
 * @returns {Object} Returns the merged object
 */
export function mergeWith(object, ...args) {
  const customizer = args.pop();
  const sources = args;

  if (typeof customizer !== 'function') {
    sources.push(customizer);
    return assign({}, object, ...sources);
  }

  const result = assign({}, object);

  for (const source of sources) {
    if (source == null) continue;

    for (const key in source) {
      if (!Object.prototype.hasOwnProperty.call(source, key)) continue;

      const objValue = result[key];
      const srcValue = source[key];
      
      // Use customizer if provided
      const customValue = customizer(objValue, srcValue, key, result, source);
      
      if (customValue !== undefined) {
        result[key] = customValue;
        continue;
      }
      
      // Deep merge objects
      if (typeof objValue === 'object' && objValue !== null && 
          typeof srcValue === 'object' && srcValue !== null &&
          !isArray(objValue) && !isArray(srcValue)) {
        result[key] = mergeWith(objValue, srcValue, customizer);
      } else {
        result[key] = srcValue;
      }
    }
  }

  return result;
}

/**
 * Checks if a value is a plain object and not null
 * @param {*} value - The value to check
 * @returns {boolean} - Returns true if value is a plain object and not null
 */
export function isNonNullObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype;
}
