/**
 * @param {number[]} nums
 * @return {number}
 */
var finalElement = function (nums) {
  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }

  const dp = [];
  for (let i = 0; i < 1 << n; i++) {
    dp.push([0, 0]);
  }

  for (let i = 0; i < n; i++) {
    const mask = 1 << i;
    dp[mask][0] = nums[i];
    dp[mask][1] = nums[i];
  }

  // Fill dp for all states
  for (let mask = 1; mask < 1 << n; mask++) {
    const count = bitCount(mask);
    if (count < 2) continue;

    for (let turn = 0; turn < 2; turn++) {
      let result;
      if (turn === 0) {
        // Alice's turn - maximize
        result = -Infinity;
        for (let submask = mask; submask; submask = (submask - 1) & mask) {
          const removedCount = bitCount(submask);
          if (removedCount > 0 && removedCount < count) {
            const remaining = mask ^ submask;
            result = Math.max(result, dp[remaining][1]);
          }
        }
      } else {
        // Bob's turn - minimize
        result = Infinity;
        for (let submask = mask; submask; submask = (submask - 1) & mask) {
          const removedCount = bitCount(submask);
          if (removedCount > 0 && removedCount < count) {
            const remaining = mask ^ submask;
            result = Math.min(result, dp[remaining][0]);
          }
        }
      }
      dp[mask][turn] = result;
    }
  }

  return dp[(1 << n) - 1][0];
};

/**
 * @param {number} n
 * @return {number}
 */
function bitCount(n) {
  n = n - ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
}
