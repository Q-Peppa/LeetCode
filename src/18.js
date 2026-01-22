/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  if (!nums || nums.length < 4) return res;

  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Prune: smallest possible sum with nums[i] is too large
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    // Prune: largest possible sum with nums[i] is too small
    if (nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue;

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      // Prune with nums[i] and nums[j]
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[n - 1] + nums[n - 2] < target) continue;

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return res;
};

//  nums = [1,0,-1,0,-2,2], target = 0

console.log(fourSum([1, 0, -1, 0, -2, 2], 0), 0);
