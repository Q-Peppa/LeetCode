/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  let ans = -1;
  let maxTimes = -1;
  divisors.forEach((d) => {
    let t = 0;
    nums.forEach((e) => {
      if (e % d === 0) {
        t++;
      }
    });
    if (t > maxTimes || (t == maxTimes && d < ans)) {
      maxTimes = t;
      ans = d;
    }
  });
  return ans;
};
