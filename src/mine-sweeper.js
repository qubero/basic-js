const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const dim = matrix[0].length;
  const result = [];

  matrix.forEach((m, outerIdx) => {
    const row = m.reduce((arr, _, idx) => {
      let count = 0;

      if (idx !== 0
        && (m[idx - 1]
          || outerIdx !== 0 && matrix[outerIdx - 1][idx - 1]
          || outerIdx !== matrix.length - 1 && matrix[outerIdx + 1][idx - 1]
        )
      ) count++;

      if (idx !== dim - 1
        && (m[idx + 1]
          || outerIdx !== 0 && matrix[outerIdx - 1][idx + 1]
          || outerIdx !== matrix.length - 1 && matrix[outerIdx + 1][idx + 1]
        )
      ) count++;

      if (outerIdx !== 0 && matrix[outerIdx - 1][idx]) count++;
      if (outerIdx !== matrix.length - 1 && matrix[outerIdx + 1][idx]) count++;

      arr.push(count);

      return arr;
    }, []);

    result.push(row);
  });

  return result;
}

module.exports = {
  minesweeper
};
