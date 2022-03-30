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
  str = String(str);
  let additionString = '';
  if (options.hasOwnProperty('addition')) {
    let additionArray = new Array(options.additionRepeatTimes || 1);
    options.addition = String(options.addition);
    additionArray.fill(options.addition, 0, options.additionRepeatTimes || 1)
    additionString = additionArray.join(options.additionSeparator || '|');
    str += additionString;
  }

  let stringArray = new Array(options.repeatTimes || 1);
  stringArray.fill(str, 0, options.repeatTimes || 1)

  return stringArray.join(options.separator || '+');
}

module.exports = {
  repeater
};
