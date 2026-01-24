/**
 * @param {number[]} nums
 * @return {number}
 */
var centeredSubarrays = function (nums) {
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    const seen = new Set();
    for (let j = i; j < n; j++) {
      sum += nums[j];
      seen.add(nums[j]);
      if (seen.has(sum)) {
        ans++;
      }
    }
  }
  return ans;
};
