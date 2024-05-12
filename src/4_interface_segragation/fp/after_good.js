/**
 * @module solid_crockford/4_interface_segragation/fp/after_good
 */

/**
 * @callback Method
 */

/**
 * @typedef {Record<string, Method>} Arg
 */

/*
 * We defined 3 segregated interfaces
 * that are designed to accomplish
 * what matters the most for roles
 * expected for each.
 */

/**
 * @typedef IPersonContext
 * @type {Object}
 * @property {Method} use_chopsticks
 * @property {Method} cook_chow_mein
 */

/**
 * @typedef IAccountantContext
 * @type {Object}
 * @property {Method} use_excel
 */

/**
 * @typedef IDeveloperContext
 * @type {Object}
 * @property {Method} use_visual_studio
 */

/**
 * @param {Arg} arg
 * @returns {IPersonContext}
 */
const iPersonFactory = ({
  use_chopsticks,
  cook_chow_mein,
}) => Object.create({ use_chopsticks, cook_chow_mein });

/**
 * @param {Arg} arg
 * @returns {IAccountantContext}
 */
const iAccountantFactory = ({ use_excel }) =>
  Object.create({ use_excel });

/**
 * @param {Arg} arg
 * @returns {IDeveloperContext}
 */
const iDeveloperFactory = ({ use_visual_studio }) =>
  Object.create({ use_visual_studio });

/*
 * Note: "Union Type in JSDoc"
 * Having 'jsdoc-plugin-intersection'
 * allows you to convert '&' of TS
 * into '|' of JSDoc.
 */

/**
 * Accountants will no longer need to
 * deal with using Visual Studio Code.
 *
 * @returns {IPersonContext & IAccountantContext}
 */
const accountantFactory = () => {
  const use_chopsticks = () => {};
  const cook_chow_mein = () => {};
  const use_excel = () => {};

  const person = iPersonFactory({
    use_chopsticks,
    cook_chow_mein,
  });

  const accountant = iAccountantFactory({ use_excel });

  return Object.create({ ...person, ...accountant });
};

/**
 * Developers will no longer need to
 * deal with using Excel at work.
 *
 * @returns {IPersonContext & IDeveloperContext}
 */
const developerFactory = () => {
  const use_chopsticks = () => {};
  const cook_chow_mein = () => {};
  const use_visual_studio = () => {};

  const person = iPersonFactory({
    use_chopsticks,
    cook_chow_mein,
  });

  const developer = iDeveloperFactory({
    use_visual_studio,
  });

  return Object.create({ ...person, ...developer });
};

{
  const accountant = accountantFactory();
  accountant.use_excel();

  const developer = developerFactory();
  developer.use_visual_studio();
}
