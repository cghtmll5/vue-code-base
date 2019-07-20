import CryptoJS from './tripledes';
CryptoJS.mode.ECB = (function() {
  var ECB = CryptoJS.lib.BlockCipherMode.extend();
  ECB.Encryptor = ECB.extend({
    processBlock: function(words, offset) {
      this._cipher.encryptBlock(words, offset);
    }
  });
  ECB.Decryptor = ECB.extend({
    processBlock: function(words, offset) {
      this._cipher.decryptBlock(words, offset);
    }
  });
  return ECB;
}());
export function encryptByDES(message, key) {
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}
export function decryptByDES(ciphertext, key) {
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
  }, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
export default {
  encryptByDES,
  decryptByDES
}
// DES加密
// export const encryptDes = (message, key) => {
//   var keyHex = cryptoJs.enc.Utf8.parse(key);
//   var option = { mode: cryptoJs.mode.ECB, padding: cryptoJs.pad.Pkcs7 };
//   var encrypted = cryptoJs.DES.encrypt(message, keyHex, option);
//   return encrypted.ciphertext.toString()
// };
// // DES解密
// export const decryptDes = (message, key) => {
//   var keyHex = cryptoJs.enc.Utf8.parse(key);
//   var decrypted = cryptoJs.DES.decrypt(
//     {
//       ciphertext: cryptoJs.enc.Hex.parse(message)
//     },
//     keyHex,
//     {
//       mode: cryptoJs.mode.ECB,
//       padding: cryptoJs.pad.Pkcs7
//     }
//   );
//   return decrypted.toString(cryptoJs.enc.Utf8)
// };
