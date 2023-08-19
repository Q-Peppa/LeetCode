/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSeconds = function (nums) {
  const quotient = (x, y) => Math.floor(x / y);
  let ans = 1e9;
  /**
   *
   * @type {Record< number|string , number[] >}
   */
  const p = {};
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    if (!p[v]) p[v] = [];
    p[v].push(i);
  }
  for (const v of Object.values(p)) {
    let temp = 0;
    for (let i = 0; i < v.length; i++) {
      const k = (v[0] - v.at(-1) + nums.length - 1) % nums.length;
      temp = Math.max(temp, quotient(k + 1, 2));
    }
    ans = Math.min(ans, temp);
  }
  return ans;
};
