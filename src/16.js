/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const { abs } = Math;
  nums.sort((a, b) => a - b);
  let ans = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      let mid = nums[i] + nums[r] + nums[l];
      if (mid === target) return target;
      else {
        if (abs(mid - target) < abs(ans - target)) {
          ans = mid;
        } else {
          if (mid > target) r--;
          else l++;
        }
      }
    }
  }
  return ans;
};
