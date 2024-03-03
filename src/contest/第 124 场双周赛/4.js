/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function (nums) {
  nums.sort((a, b) => a - b);
  let dp = new Array(nums.length + 1).fill(1);
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] || nums[i] === nums[i - 1] + 1) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = 1;
    }
  }
  return dp.at(-1);
};
