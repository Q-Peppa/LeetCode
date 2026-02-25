/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function (s) {
  if (s.length <= 2) return s;
  const specials = [];
  let count = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') count++;
    else count--;
    if (count === 0) {
      specials.push('1' + makeLargestSpecial(s.substring(start + 1, i)) + '0');
      start = i + 1;
    }
  }
  specials.sort((a, b) => b.localeCompare(a));
  return specials.join('');
};
console.log(makeLargestSpecial('11011000') === '11100100', 'ans is 11100100');
