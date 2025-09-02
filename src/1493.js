/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const dp = [];
  let res = 0;
  let t = 0;
  for (let i = 0; i < nums.length; i++) {
    // console.log(dp)
    if (nums[i] === 1) {
      dp.push(nums[i]);
      res = Math.max(res, dp.length);
    }
    if (nums[i] === 0 && t === 1) {
      while (dp.includes(0)) dp.shift();
      t = 0;
      // continue;
    }
    if (nums[i] === 0 && t === 0) {
      dp.push(nums[i]);
      t = 1;
      res = Math.max(res, dp.length);
    }
  }
  return res - 1;
};
/**
 *
 * @param { number[] } nums
 * @returns { number }
 * @description 优化
 */
function longestSubarray2(nums) {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    // 如果窗口中 0 的个数超过 1，就要收缩左边
    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // right - left + 1 是窗口长度
    maxLen = Math.max(maxLen, right - left + 1);
  }

  // 减 1 因为要“删除一个元素”（这里删除的是窗口中那个 0 或一个 1）
  return maxLen - 1;
}
