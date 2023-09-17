/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  let pos = nums.filter((item) => item > 0);
  let zero = nums.filter((item) => item === 0);
  if (pos.length === 0) {
    return 0;
  }
  let neg = nums.filter((item) => item < 0);
  let sumPos = pos.reduce((a, b) => a + b, 0);

  neg.sort((a, b) => b - a);
  let ans = pos.length + zero.length;
  let s = 0;
  while (sumPos > 0) {
    sumPos += neg[s];
    ans++;
    s++;
  }

  return ans - 1;
};
console.log(maxScore([1, 0, 0, 0, 0, 0, -1]));
