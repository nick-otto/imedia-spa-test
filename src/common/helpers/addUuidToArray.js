import v4 from 'uuid/v4.js';

/**
 *
 * @param arr[] {object}
 * @returns {array}
 */
export default function (arr) {
  arr.forEach(cur => {
    if (!cur.uuid) {
      cur.uuid = v4();
    }
  });

  return arr;
}
