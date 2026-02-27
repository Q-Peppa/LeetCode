/**
 * @param {number[]} nums
 * @return {number}
 */
var testHook = function (nums) {
  let x = 1 + 2;
  console.log('bad2');
  return nums.length + x;
};
console.log(testHook([1, 2, 3]));
