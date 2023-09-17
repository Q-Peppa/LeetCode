const bitCount = (k) => {
  let ans = 0;
  while (k) {
    ans += k & 1;
    k >>= 1;
  }
  return ans;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (bitCount(i) === k) ans += nums[i];
  }
  return ans;
};
