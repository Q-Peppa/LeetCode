/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  const memo = new Map();

  const helper = function (str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    if (str1 === str2) {
      return true;
    }

    const key = str1 + '|' + str2;
    if (memo.has(key)) {
      return memo.get(key);
    }

    const count = new Array(26).fill(0);
    for (let i = 0; i < str1.length; i++) {
      count[str1.charCodeAt(i) - 97]++;
      count[str2.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) {
        memo.set(key, false);
        return false;
      }
    }

    const n = str1.length;
    for (let i = 1; i < n; i++) {
      if (
        (helper(str1.substring(0, i), str2.substring(0, i)) &&
          helper(str1.substring(i), str2.substring(i))) ||
        (helper(str1.substring(0, i), str2.substring(n - i)) &&
          helper(str1.substring(i), str2.substring(0, n - i)))
      ) {
        memo.set(key, true);
        return true;
      }
    }

    memo.set(key, false);
    return false;
  };

  return helper(s1, s2);
};

console.log(isScramble('great', 'rgeat'), '1', 'ans is true');
console.log(isScramble('abcde', 'caebd'), '2', 'ans is false');
console.log(isScramble('a', 'a'), '3', 'ans is true');
console.log(
  isScramble('eebaacbcbcadaaedceaaacadccd', 'eadcaacabaddaceacbceaabeccd'),
  '4',
  'ans is true',
);
