/**
 *
 * @param key {string}
 * @param val {*}
 */
export function localStorageSet(key, val) {
  if (typeof val === 'undefined') throw new Error('value for write is undefined!');

  localStorage.setItem(key, JSON.stringify(val));
}

/**
 *
 * @param key {string}
 */
export function localStorageGet(key) {
  if (!localStorage.getItem(key)) return null;

  return JSON.parse(localStorage.getItem(key));
}

/**
 *
 * @param key {string}
 */
export function localStorageRemove(key) {
  localStorage.removeItem(key);
}

export function localStorageRemoveAll() {
  Object.keys(localStorage).forEach((key) => {
    remove(key);
  });
}
