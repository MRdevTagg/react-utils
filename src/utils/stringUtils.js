/**
 * Capitalizes the first character of a string
 * @param {string} string - The string to capitalize
 * @returns {string} Returns the capitalized string
 */
export function capitalize(string) {
  if (typeof string !== 'string' || !string) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Gets the value at path of object
 * @param {Object} object - The object to query
 * @param {string|Array} path - The path of the property to get
 * @param {*} [defaultValue] - The value returned if the resolved value is undefined
 * @returns {*} Returns the resolved value
 */
export function get(object, path, defaultValue) {
  if (object == null) {
    return defaultValue;
  }
  
  const keys = Array.isArray(path) 
    ? path 
    : path.split('.').filter(key => key.trim() !== '');
  
  let result = object;
  for (const key of keys) {
    if (result == null || typeof result !== 'object') {
      return defaultValue;
    }
    result = result[key];
  }
  
  return result === undefined ? defaultValue : result;
}
