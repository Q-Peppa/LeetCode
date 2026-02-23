/**
 * @param {number[]} nums
 * @return {number}
 */
var scoreDifference = function (nums) {
  let f, s;
  f = s = 0;
  let b = true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      b = !b;
    }
    if ((i + 1) % 6 === 0) b = !b;
    if (b) f += nums[i];
    else s += nums[i];
  }
  return f - s;
};
