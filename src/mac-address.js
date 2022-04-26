const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split('-');
  const re = /[A-F0-9]/g;

  if (arr.length !== 6) return false;

  for (let el of arr) {
    if (el.length !== 2 || el.match(re).length !== 2) {
      return false;
    }
  }

  return true;
}
module.exports = {
  isMAC48Address
};
