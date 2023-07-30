/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const size = new Set(nums).size;
  let ans = 0;
  const l = nums.length;
  const dfs = (start) => {
    if (start > l) return;
    const set = new Set();
    for (let i = start; i < l; i++) {
      set.add(nums[i]);
      if (set.size === size) {
        ans++;
      }
    }
    dfs(start + 1);
  };
  dfs(0);
  return ans;
};
console.log(countCompleteSubarrays([1, 3, 1, 2, 2]));

// [5,5,5,5]
console.log(countCompleteSubarrays([5, 5, 5, 5]));
