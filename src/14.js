/**
 * @param {string[]} s
 * @return {string}
 */
var longestCommonPrefix = function (s) {
  let str = '&' + s.join('&');
  let maxStr = '';
  let regStr = '&';
  for (let i = 0; i < s[0].length; i++) {
    regStr += s[0][i];
    let reg = new RegExp(regStr, 'g');
    let match = str.match(reg);
    if (match.length === s.length) {
      maxStr = regStr;
    }
  }
  return maxStr.substring(1);
};
