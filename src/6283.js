/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let [pos, neg] = [0, 0];

  for (let i of nums) {
    if (i > 0) {
      pos++;
    } else {
      neg++;
    }
  }
  return Math.max(pos, neg);
};
