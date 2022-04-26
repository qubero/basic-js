const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]))
    .reduce((prev, cur) => {
      for (let el of cur) {
        if (el === 0) break;
        prev += el;
      }

      return prev;
    }, 0);
}

module.exports = {
  getMatrixElementsSum
};
