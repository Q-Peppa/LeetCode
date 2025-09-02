/**
 * @param {number} n
 * @return {number}
 */
var stringCount = function (n) {
  if (n < 3) return 0;
  const mod = 10 ** 9 + 7;
  let pre = 12;
  for (let i = 5; i <= n; i++) {
    for (let j = 1; j <= 26; j++) {
      pre = (pre * j * i) % mod;
    }
  }
  return pre % mod;
};
// 526083947580
// 560496783974400
console.log(stringCount(4));
console.log(stringCount(10));
