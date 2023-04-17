/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  let result = [];
  for (let i = 0; i < score.length; i++) {
    result.push(score[i][k]);
  }
  result.sort((a, b) => b - a);
  let ans = [];
  for (let i = 0; i < result.length; i++) {
    let row = score.find((item) => item[k] === result[i]);
    ans.push(row);
  }
  return ans;
  // console.log('result',result)
};
