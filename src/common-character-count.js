const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr = s1.split('');
  let length = s2.length;

  while (length > 0) {
    const idx = arr.indexOf(s2[length - 1]);
    if (idx !== -1) delete arr[idx];
    length--;
  }

  return arr.length - arr.filter(el => el).length;
}

module.exports = {
  getCommonCharacterCount
};
