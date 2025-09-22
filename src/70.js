/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let pre = 1,
    cur = 1;
  for (let i = 1; i <= n; i++) {
    let temp = pre + cur;
    pre = cur;
    cur = temp;
  }
  return pre;
};
