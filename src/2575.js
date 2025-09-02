/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function (word, m) {
  let ans = [];
  let cur = 0;
  // word.slice(0,i) % m
  for (let i = 0; i < word.length; i++) {
    cur = (cur * 10 + Number(word[i])) % m;
    ans.push(cur === 0 ? 1 : 0);
  }
  return ans;
};
console.log(divisibilityArray('998244353', 3));
console.log(divisibilityArray('1010', 10));
console.log(divisibilityArray('86217457695827338571', 8));
console.log(divisibilityArray('529282143571', 4));
// [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
// [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
