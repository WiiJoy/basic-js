const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let max = 0
  let strDigit = '' + n

  for (let i = 0; i < strDigit.length; i++) {
    if (max < Number(strDigit.replace(strDigit[i], ''))) {
      max = Number(strDigit.replace(strDigit[i], ''))
    }
  }

  return max
}

module.exports = {
  deleteDigit
};
