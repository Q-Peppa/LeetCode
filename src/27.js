/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var i = 0;
  for (let count = 0; count < nums.length; count++) {
    if (nums[count] !== val) {
      nums[i] = nums[count];
      i++;
    }
  }
  return i;
};
