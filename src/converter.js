// using bas-58, which is more legible to humans (no 0,O,l)

const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const base = alphabet.length;

const converter = {
  encode: function(urlId) {
    // convert base-10 urlID to base-58
    let encoded = '';
    let remainder;
    while (urlId) {
      remainder = urlId % base;
      urlId = Math.floor(urlId / base);
      encoded = alphabet[remainder].toString() + encoded;
    }
    return encoded;
  },

  decode: function(shortUrl) {
    // convert base-58 shortUrl to base-10
    let decoded = 0;
    let power;
    let multiplier;
    while (shortUrl) {
      power = shortUrl.length - 1;
      multiplier = alphabet.indexOf(shortUrl[0]);
      decoded += multiplier * Math.pow(base, power);
      shortUrl = shortUrl.substring(1);
    }
    return decoded;
  }
};

module.exports = converter;