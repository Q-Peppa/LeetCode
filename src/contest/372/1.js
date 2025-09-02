/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
  let ans = 0;
  let f = false;
  for (let i = 0; i <= 100; i++) {
    if (s1[i] !== s2[i] || s2[i] !== s3[i] || s1[i] !== s3[i] || f) {
      if (i < 1) return -1;
      else {
        ans += [s1[i], s2[i], s3[i]].filter((e) => e !== undefined).length;
        f = true;
      }
    }
  }
  return ans;
};
