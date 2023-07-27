/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  const left = [0];
  const right = [0];
  for (let i = 0; i < nums.length - 1; i++) {
    left.push(left[i] + nums[i]);
  }
  for (let i = nums.length - 1; i > 0; i--) {
    right.unshift(right[0] + nums[i]);
  }
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(Math.abs(left[i] - right[i]));
  }
  return ans;
};
console.log(leftRigthDifference([10, 4, 8, 3]));
console.log(leftRigthDifference([1]));
