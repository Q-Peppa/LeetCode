/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  let oddSum = 0,
    evenSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2) {
      oddSum += nums[i];
    } else {
      evenSum += nums[i];
    }
  }
  let ans = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      evenSum -= nums[i];
      if (oddSum === evenSum) {
        ans++;
      }
      oddSum += nums[i];
    } else {
      oddSum -= nums[i];
      if (oddSum === evenSum) {
        ans++;
      }
      evenSum += nums[i];
    }
  }
  return ans;
};
console.log(waysToMakeFair([2, 1, 6, 4]));
console.log(waysToMakeFair([1, 1, 1]));
