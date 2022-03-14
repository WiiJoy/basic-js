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
  if (domains.length === 0) return {}

  let obj = {}

  domains.forEach(domain => {
    let domainArr = domain.split('.').reverse()
    let currDomain = ''

    for (let i = 0; i < domainArr.length; i++) {
      currDomain = `${currDomain}.${domainArr[i]}`
      if (obj.hasOwnProperty(currDomain)) {
        obj[currDomain]++
      } else {
        obj[currDomain] = 1
      }
    }
  })

  return obj
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


}

module.exports = {
  getDNSStats
};
