const _ = require('lodash');
/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  if (new Set(text).size === 1) return text.length;
  const max = Math.max;
  const min = Math.min;
  const hash = _.countBy(text);
  return [...text].reduce(
    ([ans, k], c, i) => {
      if (text[++i] === c) return [ans, ++k];
      while (text[++i] === c) k += 1;
      return [max(ans, min(++k, hash[c])), 1];
    },
    [0, 1],
  )[0];
};

console.log(maxRepOpt1('ababa'));
console.log(maxRepOpt1('aaabaaa'));
console.log(maxRepOpt1('aaabbaaa'));
console.log(maxRepOpt1('aaaaa'));
console.log(maxRepOpt1('abcdef'));
// 3, 6, 4, 5, 1
