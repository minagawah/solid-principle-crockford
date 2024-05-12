/**
 * @module solid_crockford/4_interface_segragation/fp/after_bad
 */

/** @typedef {function(): void} Method */

/**
 * @typedef EmployeeContext
 * @type {Object}
 * @property {Method} use_chopstikcs
 * @property {Method} cook_chow_mein
 * @property {Method} use_excel
 * @property {Method} use_visual_studio
 */

/**
 * We are implementing methods to make
 * 'EmployeeContext' which would best
 * represent the ideal employee for
 * our company.
 *
 * @returns {EmployeeContext}
 */
const employeeFactory = () => {
  // Basic skills required
  const use_chopsticks = () => {};
  const cook_chow_mein = () => {};

  // Desired skills if any
  const use_excel = () => {};
  const use_visual_studio = () => {};

  return Object.create({
    use_chopsticks,
    cook_chow_mein,
    use_excel,
    use_visual_studio,
  });
};

{
  /*
   * More likely, accountants will not
   * be using Visual Studio Code, and
   * so the method 'use_visual_studio'
   * will never get called. Then, we
   * would say 'EmployeeContext'
   * violates ISP (Interface
   * Segragation Principle).
   */
  const accountant = employeeFactory();
  accountant.use_excel();

  /*
   * Similarly, developers will never
   * have a chance in using Excel. So,
   * 'EmployeeContext' clearly violates
   * ISP (Interface Segragation Principle).
   */
  const developer = employeeFactory();
  developer.use_visual_studio();
}
