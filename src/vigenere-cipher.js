const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool
  }
  encrypt(str, key) {
    // const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let currAbc = abc
    // let str = 'attack at dawn!'
    // let key = 'alphonse'
    if (!str || !key) throw new Error ('Incorrect arguments!')
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    str = str.toUpperCase()
    key = key.toUpperCase()
    let codeStr = ''

    while (key.length < str.length) {
      key = key.concat(key)
    }

    let j = 0
    for (let i = 0; i < str.length; i++) {
      if (abc.includes(str[i])) {
        currAbc = abc.slice(abc.indexOf(key[j])) + abc.slice(0, abc.indexOf(key[j]))
        console.log(abc, currAbc)
        codeStr += currAbc[abc.indexOf(str[i])]
      } else {
        codeStr += str[i]
        j--
      }
      j++
    }

    return this.bool ? codeStr : codeStr.split('').reverse().join('')

  }
  decrypt(str, key) {
    let currAbc = abc
    if (!str || !key) throw new Error ('Incorrect arguments!')
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    str = str.toUpperCase()
    key = key.toUpperCase()
    let decodeStr = ''

    while (key.length < str.length) {
      key = key.concat(key)
    }

    let j = 0
    for (let i = 0; i < str.length; i++) {
      if (abc.includes(str[i])) {
        currAbc = abc.slice(abc.indexOf(key[j])) + abc.slice(0, abc.indexOf(key[j]))
        console.log(abc, currAbc)
        decodeStr += abc[currAbc.indexOf(str[i])]
      } else {
        decodeStr += str[i]
        j--
      }
      j++
    }

    console.log(decodeStr)

    return this.bool ? decodeStr : decodeStr.split('').reverse().join('')

  }
}

module.exports = {
  VigenereCipheringMachine
};
