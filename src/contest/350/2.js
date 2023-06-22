/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function (nums) {
  let minDiff = 0x3f3f3f3f;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] < minDiff) {
      minDiff = nums[i] - nums[i - 1];
    }
  }
  return minDiff;
};
