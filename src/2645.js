/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  let ans = 0;
  for (let i = 0; i < word.length; ) {
    if (word[i] === 'a' && word[i + 1] === 'b' && word[i + 2] === 'c') {
      i += 3;
    } else if (word[i] === 'a' && word[i + 1] === 'b') {
      i += 2;
      ans++;
    } else if (word[i] === 'a' && word[i + 1] === 'c') {
      i += 2;
      ans += 1;
    } else if (word[i] === 'a') {
      i += 1;
      ans += 2;
    } else if (word[i] === 'b' && word[i + 1] === 'c') {
      i += 2;
      ans++;
    } else if (word[i] === 'b') {
      i += 1;
      ans += 2;
    } else if (word[i] === 'c') {
      i += 1;
      ans += 2;
    }
  }
  return ans;
};
// console.log(addMinimum("a"))
// console.log(addMinimum("aaa"))
// console.log(addMinimum("abc"))
// // "aaaaac"
// console.log(addMinimum("aaaaac")) // 9
