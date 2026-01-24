/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    // Skip duplicate elements for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for the second number
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicates for the third number
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// Time Complexity: O(N^2)
// Space Complexity: O(1) (ignoring output storage)

console.log(threeSum([-1, 0, 1, 2, -1, -4]), 'Expected: [[-1,-1,2],[-1,0,1]]');
console.log(threeSum([0, 1, 1]), 'Expected: []');
console.log(threeSum([0, 0, 0]), 'Expected: [[0,0,0]]');
