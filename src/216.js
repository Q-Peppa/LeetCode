/**
 * @param {number} k
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum3 = function (k, target) {
  let res = [],
    cur = [];

  function dfs(sum, deepth) {
    if (sum === target && cur.length === k) {
      res.push(cur.slice());
      return;
    }
    for (let i = deepth; i <= 9; i++) {
      sum += i;
      if (sum > target) continue;
      cur.push(i);
      dfs(sum, i + 1);
      cur.pop();
      sum -= i;
    }
  }

  dfs(0, 1);
  return res;
};

console.log(combinationSum3(3, 9));
console.log(combinationSum3(3, 7));
console.log(combinationSum3(9, 45));
