/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let ans = -2;
  let i = 0,
    j = 2;
  let leftSum = nums[0] + nums[1];
  while (i < j && j < n) {
    if (leftSum > nums[j]) {
      ans = Math.max(ans, leftSum + nums[j]);
      leftSum += nums[j];
      j++;
    } else {
      leftSum += nums[j];
      j++;
    }
  }
  return Math.max(ans, -1);
};

console.log(largestPerimeter([5, 5, 5]));
// [1,12,1,2,5,50,3]
console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3]));
console.log(largestPerimeter([5, 5, 50]));
