/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function (nums) {
  const min = Math.min(...nums);
  let ans = 0;
  for (const i of nums) {
    ans += i - min;
  }
  return ans;
};
