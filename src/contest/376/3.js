const isReverse = (num) => {
  if (num < 10) return true;
  let reverse = 0,
    original = num;
  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reverse === original;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  nums.sort((a, b) => a - b);

  const mid = Math.floor(nums.length / 2);
  let left = nums[mid],
    right = nums[mid];

  for (let i = left; ; i--) {
    if (isReverse(i)) {
      left = i;
      break;
    }
  }
  for (let i = right; ; i++) {
    if (isReverse(i)) {
      right = i;
      break;
    }
  }
  let lc = 0,
    rc = 0;
  for (const ele of nums) {
    lc += Math.abs(left - ele);
    rc += Math.abs(right - ele);
  }
  return Math.min(lc, rc);
};

console.log(minimumCost([1, 2, 3, 4, 5]));
console.log(minimumCost([10, 12, 13, 14, 15]));
console.log(minimumCost([22, 33, 22, 33, 22]));
console.log(minimumCost([100]));
console.log(minimumCost([99, 100]));
