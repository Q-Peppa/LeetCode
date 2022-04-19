/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
  const cnt = new Map();
  const ans = new Set();

  const target = Math.floor(nums.length / 3);
  if (nums.length <= 2) {
    return [...new Set(nums)];
  }
  for (const num of nums) {
    cnt.set(num, (cnt.get(num) ?? 0) + 1);
    if (cnt.get(num) > target) {
      ans.add(num);
    }
  }
  return [...ans];
};
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1]));
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));
