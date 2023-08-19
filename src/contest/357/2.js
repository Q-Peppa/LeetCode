/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
var canSplitArray = function (nums, m) {
  if (nums.length <= 2) return true;
  let sum = 0;
  for (const v of nums) {
    sum += v;
  }
  if (sum < m) return false;
  const func = (left, right, curSum) => {
    console.log(left, right, curSum);
    if (left === right) return true;
    if (curSum < m) return false;
    if (func(left + 1, right, curSum - nums[left])) {
      return true;
    }
    if (func(left, right - 1, curSum - nums[right])) {
      return true;
    }
    return false;
  };
  return func(0, nums.length - 1, sum);
};

console.log(
  canSplitArray(
    [
      35, 33, 58, 3, 12, 66, 1, 53, 26, 4, 5, 8, 11, 13, 43, 35, 18, 61, 5, 35,
      27, 51, 8, 78, 6, 17, 76, 6, 82, 3, 73, 5, 78,
    ],
    94,
  ),
);
