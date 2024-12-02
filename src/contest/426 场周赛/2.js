// import _ from  'lodash'
/**
 * @param {number[]} nums
 * @return {number}
 */
const getLargestOutlier = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let sum = _.sum(nums);
  const set = new Map();
  for (let ns of nums) {
    set.set(ns, (set.get(ns) ?? 0) + 1);
  }

  const check = (ss) => {
    return set.get(ss / 2) > 0;
  };

  for (let i = n - 1; i >= 0; i--) {
    sum -= nums[i];
    const ns = nums[i];
    set.set(ns, set.get(ns) - 1);
    if (check(sum)) return nums[i];
    set.set(ns, set.get(ns) + 1);
    sum += nums[i];
  }
  return 0;
};
