/**
 * @param {number[]} nums
 * @return {number}
 */
var minLengthAfterRemovals = function (nums) {
  if (nums.length === 1) return 1;
  if (new Set(nums).size === 1) return nums.length;
  const ans = {};
  let max = -1;
  for (const v of nums) {
    if (ans[v] === undefined) ans[v] = 0;
    ans[v]++;
    max = Math.max(max, ans[v]);
  }

  const l = nums.length;
  let rest = l - max;
  if (l % 2 === 0) {
    if (max <= l / 2) {
      return 0;
    }
    return max - rest;
  } else {
    if (max <= Math.floor(l / 2)) {
      return 1;
    }
    return max - rest;
  }
};
// [1,3,4,9]
console.log(`node - test` , minLengthAfterRemovals([3, 4, 9]));
// [2,3,6,9]
console.log(minLengthAfterRemovals([2, 3, 6, 9]));
// [1,1,2]
console.log(minLengthAfterRemovals([1, 1, 2]));
// [1,1,1,2,2,2,3,3,3,3]
console.log(minLengthAfterRemovals([1, 1, 1, 2, 2, 2, 3, 3, 3, 3]));

// [1,1,]
console.log(minLengthAfterRemovals([1, 1]));
