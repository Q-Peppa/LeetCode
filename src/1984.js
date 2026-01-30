/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  let minDiff = Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    minDiff = Math.min(minDiff, nums[i + k - 1] - nums[i]);
  }

  return minDiff;
};

console.log(minimumDifference([90], 1), 'expected: 0');
console.log(minimumDifference([9, 4, 1, 7], 2), 'expected: 2');
