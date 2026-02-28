/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function (nums) {
  const n = nums.length;
  if (n < 4) {
    return false;
  }

  let i = 0;

  // nums[0...p] strictly increasing
  while (i + 1 < n && nums[i] < nums[i + 1]) {
    i++;
  }
  const p = i;
  if (p === 0) {
    return false;
  }

  // nums[p...q] strictly decreasing
  while (i + 1 < n && nums[i] > nums[i + 1]) {
    i++;
  }
  const q = i;
  if (q === p || q === n - 1) {
    return false;
  }

  // nums[q...n-1] strictly increasing
  while (i + 1 < n && nums[i] < nums[i + 1]) {
    i++;
  }

  return i === n - 1;
};

console.log(isTrionic([1, 3, 2, 4]), '1', 'ans is true');
console.log(isTrionic([1, 2, 1, 2, 3]), '2', 'ans is true');
console.log(isTrionic([1, 2, 3, 2, 1]), '3', 'ans is false');
console.log(isTrionic([1, 2, 2, 1, 2]), '4', 'ans is false');
console.log(isTrionic([5, 4, 3, 4]), '5', 'ans is false');

// Time Complexity: O(n)
// Space Complexity: O(1)
