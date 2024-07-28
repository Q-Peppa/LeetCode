let N = 31623;
const pri = [];
function quick() {
  pri.length = N + 1;
  pri[0] = pri[1] = 0;
  for (let i = 2; i <= N; ++i) pri[i] = 1;
  for (let i = 2; i <= N; ++i) {
    if (pri[i]) {
      if (i * i > N) continue;
      for (let j = i * i; j <= N; j += i) pri[j] = 0; // 是 i 的倍数的均不是素数
    }
  }
}
/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var nonSpecialCount = function (l, r) {
  const T = r - l + 1;
  quick();
  const sqrt = (v) => Math.floor(Math.sqrt(v));

  const accumulate = (arr) => {
    // 求arr的前缀和数组
    const len = arr.length;
    for (let i = 1; i < len; ++i) arr[i] += arr[i - 1];
    return arr;
  };
  const preSum = accumulate(pri);

  return T - preSum[sqrt(r)] + preSum[sqrt(l - 1)];
};
