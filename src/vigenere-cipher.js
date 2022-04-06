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
class VigenereCipheringMachine {
  
  constructor(condition) {
    if (condition === undefined) {
      this.condition = true;
    } else {
      this.condition = condition;
    }
  }
  
  encrypt(message, key) {
    if(!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const keyLength = key.length;
    const alphabetPower = 26;
    const firstCharCode = 65;
    let charIndex = 0;
    const encryptedString = [...message].map(char => {
      const charCode = char.toUpperCase().charCodeAt(0) - firstCharCode;
      if (charCode >= 0 && charCode <= 26) {
        const keyCharPosition = charIndex++ % keyLength;
        const keyChar = key[keyCharPosition];
        const keyCharCode = keyChar.toUpperCase().charCodeAt(0) - firstCharCode;
        const newCharCode = (charCode + keyCharCode) % alphabetPower;
        return String.fromCharCode(newCharCode + firstCharCode)
      } else {
        return char
      }
    }).join('');

    if (this.condition) {
      // straight
      return encryptedString
    } else {
      // reverse
      return encryptedString.split('').reverse().join('')
    }
  }

  decrypt(message, key) {
    if(!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const keyLength = key.length;
    const alphabetPower = 26;
    const firstCharCode = 65;
    let charIndex = 0;
    const decryptedString = [...message].map(char => {
      const charCode = char.toUpperCase().charCodeAt(0) - firstCharCode;
      if (charCode >= 0 && charCode <= 26) {
        const keyCharPosition = charIndex++ % keyLength;
        const keyChar = key[keyCharPosition];
        const keyCharCode = keyChar.toUpperCase().charCodeAt(0) - firstCharCode;
        let newCharCode = (charCode - keyCharCode) % alphabetPower;
        if (newCharCode < 0) {
          newCharCode = alphabetPower - (-newCharCode);
        }
        return String.fromCharCode(newCharCode + firstCharCode)
      } else {
        return char
      }
    }).join('');
    
    if (this.condition) {
      // straight
      return decryptedString
    } else {
      // reverse
      return decryptedString.split('').reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
