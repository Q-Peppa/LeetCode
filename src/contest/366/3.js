/**
 * @param {string} s1
 * @param {string} s2
 * @param {number} x
 * @return {number}
 */
var minOperations = function (s1, s2, x) {
  let diff = 0;
  const pos = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff++;
      pos.push(i);
    }
  }
  if (diff % 2 === 1) return -1; // 不能操作
  if (x === 1) return diff / 2;
  let dp = [0, 0];
  // console.log()
  for (let i = 2; i <= pos.length; i++) {
    if (i % 2 === 0) {
      dp[i] = Math.min(
        dp[i - 1] + x,
        dp[i - 2] + Math.min(x, pos[i - 1] - pos[i - 2]),
      );
    } else {
      dp[i] = Math.min(
        dp[i - 1],
        dp[i - 2] + Math.min(x, pos[i - 1] - pos[i - 2]),
      );
    }
  }
  // console.log(dp);
  return dp[pos.length];
};
// 1 = "1100011000", s2 = "0101001010", x = 2
console.log(minOperations('1100011000', '0101001010', 2));
console.log(minOperations('11001011111', '01111000110', 2));

// 1101001000
// 1101001000
