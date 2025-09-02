/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  const ok = (n) => (n * (n + 1)) / 2;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (nums[i] === 0 && nums[j] === 0) {
      j++;
    }
    // console.log("j - i", j - i)
    if (j !== i) {
      res += ok(j - i);
      i = j - 1;
    }
  }
  return res;
};
