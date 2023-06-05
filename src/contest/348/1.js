/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  return Object.keys(_.countBy(s)).length;
};

console.log(minimizedStringLength('aaabc'));
console.log(minimizedStringLength('cbbd'));
console.log(minimizedStringLength('dddaaa'));
