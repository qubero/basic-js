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
const ALPHABET = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
class VigenereCipheringMachine {
  constructor(isDirect) {
    if (isDirect === false) {
      this._isReverse = true;
    } else {
      this._isReverse = false;
    }
  }

  _createInnerKey(message, key) {
    let innerKey = '';

    for (let i = 0, count = 0; i < message.length; i++) {
      if (ALPHABET.indexOf(message[i]) !== -1) {
        innerKey += key[count % key.length];
        count++;
      } else {
        innerKey += ' ';
      }
    }

    return innerKey;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);

    message = message.toUpperCase();
    key = this._createInnerKey(message, key.toUpperCase());
    let encrypted = '';

    for (let i = 0; i < message.length; i++) {
      const idxM = ALPHABET.indexOf(message[i]);

      if (idxM !== -1) {
        const idxK = ALPHABET.indexOf(key[i]);
        encrypted += ALPHABET[(idxM + idxK) % ALPHABET.length];
      } else {
        encrypted += message[i];
      }
    }

    if (this._isReverse) encrypted = encrypted.split('').reverse().join('');

    return encrypted;
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);

    message = message.toUpperCase();

    key = this._createInnerKey(message, key.toUpperCase());
    let decrypted = '';

    for (let i = 0; i < message.length; i++) {
      const idxM = ALPHABET.indexOf(message[i]);

      if (idxM !== -1) {
        let idx = idxM - ALPHABET.indexOf(key[i]);

        if (idx < 0) {
          idx = ALPHABET.length + idx;
        }

        decrypted += ALPHABET[idx];
      } else {
        decrypted += message[i];
      }
    }

    if (this._isReverse) decrypted = decrypted.split('').reverse().join('');

    return decrypted;
  }
}

module.exports = {
  VigenereCipheringMachine
};
