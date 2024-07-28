/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  nums = _.groupBy(nums, (e) => (e >= 10 ? 1 : 2));
  return _.sum(nums[1]) !== _.sum(nums[2]);
};
