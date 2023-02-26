/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
  nums.sort((a, b) => a - b);
  let mid = 0;
  mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  let i = 0,
    j = 0;
  let ans = 0;
  while (i < left.length && j < right.length) {
    if (left[i] * 2 <= right[j]) {
      ans += 2;
      i++;
      j++;
    } else {
      j++;
    }
  }
  console.log(nums, ans);
};
maxNumOfMarkedIndices([3, 5, 2, 4]);
maxNumOfMarkedIndices([9, 2, 5, 4]);
maxNumOfMarkedIndices([7, 6, 8]);
