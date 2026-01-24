var minPairSum = function (nums) {
  let n = nums.length;
  let res = 0,
    l = 0;
  nums.sort((a, b) => a - b);
  while (l < n) {
    res = Math.max(res, nums[l] + nums[n - 1]);
    l++;
    n--;
  }
  return res;
};
