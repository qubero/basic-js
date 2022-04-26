const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let isDouble = false;
  let isDiscard = false;

  return arr.reduce((prev, cur, idx) => {
    switch (cur) {
      case '--double-next':
        if (arr[idx + 1] && !arr[idx + 1].toString().startsWith('--')) isDouble = true;
        return prev;
      case '--double-prev':
        if (prev[prev.length - 1] && prev[prev.length - 1] === arr[idx - 1]) prev.push(prev[prev.length - 1]);
        return prev;
      case '--discard-prev':
        if (prev[prev.length - 1] && prev[prev.length - 1] === arr[idx - 1]) prev.pop();
        return prev;
      case '--discard-next':
        isDiscard = true;
        return prev;
    }

    if (isDouble) {
      isDouble = false;
      prev.push(cur);
    }

    if (isDiscard) {
      isDiscard = false;
    } else {
      prev.push(cur);
    }

    return prev;
  }, []);
}

module.exports = {
  transform
};
