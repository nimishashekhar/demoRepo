/**
 * Accesses values as an optional chain
 * @param {any} obj the root value
 * @param  {...string|number} fields the fields chained from the root value
 * @returns the final value in the chain, or undefined or null if any of the fields in the chain are undefined or null
 */
export const validGet = (root, ...fields) => fields.reduce((o, f) => [null, undefined].includes(o) ? o : o[f], root);

/**
 * Curries a fallback option with the validGet function; allowing a default value if the chain fails
 * @param {any} fallback the default value if the chain from validGet would return undefined or null
 * @returns {(root: any, fields: Array<string|number>)} a function which returns as validGet or `fallback` if it were to otherwise return undefined or null
 */
export const validGetOr = (fallback) => (root, ...fields) => (validGet(root, ...fields) || fallback);