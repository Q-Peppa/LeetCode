/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function (s) {
  const vowels = 'aeiou';
  let i = s.length - 1;
  while (i >= 0 && vowels.includes(s[i])) {
    i--;
  }
  return s.substring(0, i + 1);
};
