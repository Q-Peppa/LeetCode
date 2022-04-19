const _ = require('lodash');
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  let mark = 0;
  for (const char of astr) {
    const move_bit = char.codePointAt(0) - 'a'.codePointAt(0);
    if (mark & (1 << move_bit !== 0)) {
      return false;
    } else {
      mark |= 1 << move_bit;
    }
  }
  return true;
};
console.log(isUnique('leetcode'));
console.log(isUnique('abc'));
console.log(isUnique('aaa'));
console.log(isUnique('abcdefg'));
