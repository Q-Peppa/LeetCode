/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  const n = nums.length;
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 1; i < n; i++) {
    if (nums[i] < min1) {
      min2 = min1;
      min1 = nums[i];
    } else if (nums[i] < min2) {
      min2 = nums[i];
    }
  }

  return nums[0] + min1 + min2;
};

console.log(minimumCost([1, 2, 3, 12]), 6, 'ans is 6');
console.log(minimumCost([5, 4, 3]), 12, 'ans is 12');
console.log(minimumCost([10, 3, 1, 1]), 12, 'ans is 12');
