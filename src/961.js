/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const n = nums.length;
  while (true) {
    const idx1 = Math.floor(Math.random() * n);
    const idx2 = Math.floor(Math.random() * n);
    if (idx1 !== idx2 && nums[idx1] === nums[idx2]) {
      return nums[idx1];
    }
  }
};
