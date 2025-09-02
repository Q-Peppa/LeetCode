/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1]));
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));
