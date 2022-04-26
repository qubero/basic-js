const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const uniqNames = new Set(names);
  const givenNames = new Set();
  const countNames = {};

  names.forEach((name) => {
    let newName;

    if (givenNames.has(name) && uniqNames.has(name)) {
      countNames[name] = (countNames[name] || 0) + 1;
      let extra = countNames[name];
      newName = `${name}(${extra})`;
    } else {
      countNames[name] = 0;
      newName = name;
    }

    givenNames.add(newName);
  })

  return Array.from(givenNames);
}

module.exports = {
  renameFiles
};
