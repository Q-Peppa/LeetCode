/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minRemovals = function (nums, target) {
  const maxXor = 1 << 14;
  let dp = new Int16Array(maxXor).fill(-1);
  dp[0] = 0;

  for (const num of nums) {
    const next = new Int16Array(dp);

    for (let xorValue = 0; xorValue < maxXor; xorValue++) {
      if (dp[xorValue] === -1) {
        continue;
      }

      next[xorValue ^ num] = Math.max(next[xorValue ^ num], dp[xorValue] + 1);
    }

    dp = next;
  }

  if (dp[target] === -1) {
    return -1;
  }

  return nums.length - dp[target];
};

console.log(minRemovals([1, 2, 3], 0), 'case1', 'ans = 0');
console.log(minRemovals([1, 2], 0), 'case2', 'ans = 2');
console.log(minRemovals([1, 2], 3), 'case3', 'ans = 0');
console.log(minRemovals([2, 4], 1), 'case4', 'ans = -1');
console.log(minRemovals([5], 0), 'case5', 'ans = 1');

// Time: O(n * 2^14)
// Space: O(2^14)
