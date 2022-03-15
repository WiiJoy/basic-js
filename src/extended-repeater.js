const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = ''

  console.log(options)

  // if (!options.hasOwnProperty(repeatTimes)) return str + options.addition

  if (!('repeatTimes' in options)) return str + options.addition

  for (let i = 0; i < options.repeatTimes; i++) {
    string += str
    if ('addition' in options) {
      string += options.addition
      if ('additionRepeatTimes' in options) {
        let additionString = ''
        for (let j = 1; j < options.additionRepeatTimes; j++) {
          if ('additionSeparator' in options) {
            additionString = additionString + String(options.additionSeparator) + options.addition
          } else {
            additionString = additionString + '|' + options.addition
          }



          // string = ('additionSeparator' in options) ? string + String(options.additionSeparator) : string
        }

        string += additionString

      }
    }
    if (i !== (options.repeatTimes - 1)) string = ('separator' in options) ? string + String(options.separator) : string + '+'
  }

  return string


  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
