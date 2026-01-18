/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (m.has(nums[i])) {
      return [i, m.get(nums[i])];
    } else {
      m.set(target - nums[i], i);
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9), '1', 'ans is [0,1]');

console.log(twoSum([3, 2, 4], 6), '2', 'ans is [1,2]');

console.log(twoSum([3, 3], 6), '3', 'ans is [0,1]');
