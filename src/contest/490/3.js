/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var maximumXor = function (s, t) {
  let count1 = 0;
  let count0 = 0;
  for (let char of t) {
    if (char === '1') count1++;
    else count0++;
  }

  let resultT = '';
  let xorResult = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      if (count1 > 0) {
        resultT += '1';
        xorResult += '1';
        count1--;
      } else {
        resultT += '0';
        xorResult += '0';
        count0--;
      }
    } else {
      if (count0 > 0) {
        resultT += '0';
        xorResult += '1';
        count0--;
      } else {
        resultT += '1';
        xorResult += '0';
        count1--;
      }
    }
  }

  return xorResult;
};
