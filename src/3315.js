/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
  return nums.map((p) =>
    p === 2
      ? -1
      : ((t) =>
          (t = (() => {
            let k = 0;
            while (((p >> k) & 1) === 1) k += 1;
            return k;
          })()) === 0
            ? -1
            : p - (1 << (t - 1)))(),
  );
};
console.log(minBitwiseArray([2, 3, 5, 7]), [-1, 1, 4, 3]);
/**
 * You are given an array nums consisting of n prime integers.

You need to construct an array ans of length n, such that, for each index i, the bitwise OR of ans[i] and ans[i] + 1 is equal to nums[i], i.e. ans[i] OR (ans[i] + 1) == nums[i].

Additionally, you must minimize each value of ans[i] in the resulting array.

If it is not possible to find such a value for ans[i] that satisfies the condition, then set ans[i] = -1.
 */
