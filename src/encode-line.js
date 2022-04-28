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
  let prevChar = '';
  let charCount = 0;
  let resultString = '';
  [...str].forEach((char, idx) => {
    if (char === prevChar) {
      charCount++;
    } else {
      if (prevChar) {
        charCount > 1 ? resultString += `${charCount}${prevChar}` : resultString += `${prevChar}`;
      }
      prevChar = char;
      charCount = 1;
    }
    
    if (idx === str.length - 1) {
      charCount > 1 ? resultString += `${charCount}${char}` : resultString += `${char}`;
    }
  });
  
  return resultString;
}

module.exports = {
  encodeLine
};
