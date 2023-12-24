import _ from 'lodash';
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  nums.sort((a, b) => a - b);
  nums = _.chunk(nums, 2);
  nums = nums.map((e) => e.reverse());
  nums = nums.filter((e) => e.length === 2);
  return nums.flat();
};
console.log(numberGame([5, 4, 2, 3]));
