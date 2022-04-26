const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const appearances = new Map();

  domains.forEach((domain) => {
    domain.split('.').reduceRight((prev, cur) => {
      prev += `.${cur}`;
      const count = appearances.has(prev) ? appearances.get(prev) : 0;
      appearances.set(prev, 1 + count)

      return prev;
    }, '');
  });

  return Object.fromEntries(appearances);
}

module.exports = {
  getDNSStats
};
