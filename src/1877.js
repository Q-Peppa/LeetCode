/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let max = 0;
  let n = nums.length;
  for (let i = 0; i < n / 2; i++) {
    max = Math.max(max, nums[i] + nums[n - 1 - i]);
  }
  return max;
};

// The pair sum of a pair(a, b) is equal to a + b.The maximum pair sum is the largest pair sum in a list of pairs.
// For example, if we have pairs(1, 5), (2, 3), and(4, 4), the maximum pair sum would be max(1 + 5, 2 + 3, 4 + 4) = max(6, 5, 8) = 8.
// Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:
// Each element of nums is in exactly one pair, and
// The maximum pair sum is minimized.
// Return the minimized maximum pair sum after optimally pairing up the elements.

console.log(minPairSum([3, 5, 2, 3]), '7', 'ans is 7');
console.log(minPairSum([3, 5, 4, 2, 4, 6]), '8', 'ans is 8');
