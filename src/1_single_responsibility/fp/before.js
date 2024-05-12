/**
 * @module solid_crockford/1_single_responsibility/fp/before
 */

/** @callback Jump */
/** @callback Walk */

/**
 * @typedef MarioContext
 * @type {Object}
 * @property {Jump} jump
 */

/**
 * @public
 * @function
 * @param {Object} args
 * @returns {MarioContext}
 */
export const Mario = args => {
  const self = Object.freeze({
    jump,
  });

  return self;

  /** @type {Jump} */
  function jump() {
    console.log('jump!');
  }
};

/**
 * @typedef TurtleContext
 * @type {Object}
 * @property {Walk} walk
 */

/**
 * @public
 * @function
 * @param {Object} args
 * @returns {TurtleContext}
 */
export const Turtle = args => {
  const self = Object.freeze({
    walk,
  });

  return self;

  /** @type {Walk} */
  function walk() {
    console.log('walk!');
  }
};
