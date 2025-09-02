/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  let max = 0;
  nums = nums.map((e) => e & 1);
  const [a, b] = helper(nums);
  const c = helper2(nums);
  return Math.max(a, b, c);
};

function helper(arr) {
  let odd, even;
  odd = even = 0;
  arr.some((ele) => {
    if (ele & 1) odd++;
    else even++;
  });
  return [odd, even];
}
function helper2(arr) {
  let count;
  count = 0;
  let flag = arr[0] & 1;
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i] & 1) !== flag) {
      count++;
      flag = arr[i] & 1;
    }
  }
  return count + 1;
}
