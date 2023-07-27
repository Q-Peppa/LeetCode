/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  // find subsequences and it length at least 2, and after sorting the subsequence, each element (except the first element) is the square of the previous number.
  // return the length of the longest subsequence or -1 if no such subsequence exists.

  nums = [...new Set(nums)];
  nums.sort((a, b) => a - b);
  const length = nums.length;
  let max = 1;
  for (let i = nums[0]; i <= 1000; i++) {
    let n = i * i;
    let times = 1;
    while (nums.includes(n) && nums.includes(i)) {
      times++;
      n = n * n;
    }
    max = Math.max(max, times);
  }
  return max === 1 ? -1 : max;
};
console.log(
  longestSquareStreak([4, 3, 6, 16, 8, 2]), // 3
);
console.log(longestSquareStreak([2, 3, 5, 6, 7]));

console.log(longestSquareStreak([4, 16, 256, 65536]));
