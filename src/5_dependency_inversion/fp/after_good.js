/**
 * @module solid_crockford/5_dependency_inversion/oop/after_good
 */
const COOKIE_DAYS = 90;

/**
 * @template T
 * @callback Save
 * @param {T} data
 * @returns {void}
 */

/**
 * @template T
 * @callback Fetch
 * @returns {T} data
 */

/**
 * A new abstraction introduced.
 * @template T
 * @typedef GenericStorageContext
 * @type {Object}
 * @property {Save<T>} save
 * @property {Fetch<T>} fetch
 */

/**
 * This is a factory for creating
 * 'GenericStorageContext'.
 *
 * @template {GenericStorageContext<U>} T
 * @template U
 * @function
 * @param {T} storage
 * @returns {T}
 */
const genericStorageFactory = ({ save, fetch }) =>
  Object.create({ save, fetch });

/**
 * @template T
 * @typedef CookiesContext
 * @type {Object}
 * @property {string} cookie_name
 * @property {Save<T>} save
 * @property {Fetch<T>} fetch
 */

/**
 * @template T
 * @function
 * @param {string} name
 * @returns {CookiesContext<T>}
 */
const cookiesFactory = name => {
  /** @type {Save<T>} */
  const save = data => {
    const d = new Date();
    d.setTime(
      d.getTime() + 24 * 60 * 60 * 1000 * COOKIE_DAYS
    );
    document.cookie = [
      `${name}=${JSON.stringify(data)}`,
      `expires=${d.toUTCString()}`,
      `path=/`,
    ].join('; ');
  };

  /** @type {Fetch<T>} */
  const fetch = () => {
    const match = `${name}=`;
    const arr = document.cookie.split('');
    for (let i = 0; i < arr.length; i++) {
      let c = arr[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(match) === 0)
        return JSON.parse(
          c.substring(match.length, c.length)
        );
    }
  };

  /**
   * Instead of the high-level
   * ('ProfileContext') depends on
   * the low-level ('CookiesContext'),
   * we want to reverse the dependency,
   * and have the high-level
   * ('ProfileContext') depends on
   * the newly introduced abstraction
   * ('GenericStorageContext').
   *
   * @type {GenericStorageContext<T>}
   */
  const proto = genericStorageFactory({ save, fetch });

  return Object.create({ cookie_name: name, ...proto });
};

/**
 * @typedef ProfileData
 * @type {Object}
 * @property {string} name
 * @property {number} age
 */

/**
 * @typedef ProfileContext
 * @type {Object}
 * @property {Save<ProfileData>} save
 * @property {Fetch<ProfileData>} fetch
 */

/**
 * 'ProfileContext' no longer depends
 * on the low-level, but it now depends
 * on the abstraction
 * ('GenericStorageContext').
 *
 * @function
 * @param {GenericStorageContext<ProfileData>} storage
 * @returns {ProfileContext}
 */
const profileFactory = ({ save, fetch }) =>
  Object.create({ save, fetch });

{
  /** @type {CookiesContext<ProfileData>} */
  const cookies = cookiesFactory('profile');

  /** @type {ProfileContext} */
  const profile = profileFactory(cookies);
  profile.save({ name: 'Joe', age: 10 });

  // You can simplify the call
  // by using 'compose' of Ramda.
  //
  // R.compose(
  //   profileFactory,
  //   cookiesFactory,
  // )('profile').save(data);
}
