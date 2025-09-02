/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let l, r;
  const s = new Set();
  let res = 0;
  l = 0;
  r = 1;
  s.add(nums[l]);
  res = nums[l];
  let max = res;
  while (r < nums.length) {
    while (s.has(nums[r])) {
      s.delete(nums[l]);
      res -= nums[l];
      l++;
      // console.log(s , max , res , l ,r )
    }
    res += nums[r];
    s.add(nums[r]);
    max = Math.max(max, res);
    if (r === s.length) break;
    r++;
  }
  // console.log(s.length , max , res , l ,r )
  return max;
};
