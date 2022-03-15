const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    let max = 1
    let currCount = 1

    arr.forEach(item => {
      if (Array.isArray(item)) currCount += this.calculateDepth(item)

      if (max < currCount) max = currCount
      currCount = 1
    })

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return max
  }

}

module.exports = {
  DepthCalculator
};
