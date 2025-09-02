/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
  const n = nums.length;
  if (nums[0] === 1 && nums.at(-1) === n) return 0;
  let oneIndex = nums.indexOf(1);
  let ans = 0;
  while (nums[0] !== 1) {
    let temp = nums[oneIndex - 1];
    nums[oneIndex - 1] = nums[oneIndex];
    nums[oneIndex] = temp;
    oneIndex = nums.indexOf(1);
    ans += 1;
  }
  let nIndex = nums.indexOf(n);
  return ans + Math.abs(n - 1 - nIndex);
};
// 1,4,2,3
console.log(semiOrderedPermutation([1, 4, 2, 3]));
//[2,1,4,3]
console.log(semiOrderedPermutation([2, 1, 4, 3]));

// [2,4,1,3]
console.log(semiOrderedPermutation([2, 4, 1, 3]));
//  [1,3,4,2,5]
console.log(semiOrderedPermutation([1, 3, 4, 2, 5]));
