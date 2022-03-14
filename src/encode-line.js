const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  const arr = []
  let string = ''
  
  for (let letter of str) {
    arr.push([1, letter])
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i+1] && arr[i+1][1] === arr[i][1]) {
      arr[i][0]++
      arr.splice(i+1, 1)
      i--
    }
  }

  arr.forEach(item => {
    if (item[0] === 1) {
      item[0] = ''
    }
    string = string + item.join('')
  })

  return string

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
