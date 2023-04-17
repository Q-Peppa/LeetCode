/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let maxTimes = -1;
  let ans = undefined;
  for (let i = 0; i < mat.length; i++) {
    let l = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        l++;
      }
    }
    // console.log(i , l)
    if (l > maxTimes) {
      ans = [i, l];
      maxTimes = l;
    }
    // ans = l > maxTimes ? [i , l] : undefined
  }
  return ans;
};
