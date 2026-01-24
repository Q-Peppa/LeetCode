/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const swap = (i, j) => {
    let temp;
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  const reverse = (s, e) => {
    while (s < e) {
      swap(s, e);
      s++;
      e--;
    }
  };
  const len = nums.length;
  if (len === 1) return;
  if (len === 2) {
    swap(0, 1);
    return;
  }

  let i, j;
  (i = len - 2), (j = len - 1);
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i == -1) {
    reverse(0, len - 1);
    return;
  }
  while (j >= 0 && nums[j] <= nums[i]) {
    j--;
  }
  swap(i, j);
  reverse(i + 1, len - 1);
};
