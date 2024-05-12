/**
 * @module solid_crockford/2_open_closed/fp/before
 */

/**
 * @typedef ProductContext
 * @type {Object}
 * @property {function(): number} calculate_price
 */

/**
 * @typedef ProductProto
 * @type {Object}
 * @property {function(): string} getPrototype
 * @property {function(): number} calculate
 */

/**
 * @function
 * @param {ProductProto} o
 * @returns {ProductContext}
 */
export const Product = o => {
  const self = Object.freeze({
    calculate_price,
  });

  return self;

  function calculate_price() {
    if (o.getPrototype() === 'Product') {
      return 1;
    }
    return o.calculate();
  }
};
