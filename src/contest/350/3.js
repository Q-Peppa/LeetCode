/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var specialPerm = function (nums) {
  const ans = allPermutations(nums);
  const M = 10 ** 9 + 7;
  let res = 0;
  for (let i = 0; i < ans.length; i++) {
    let cur = ans[i];
    let flag = true;
    for (let j = 0; j < cur.length - 1; j++) {
      if (cur[j] % cur[j + 1] !== 0 && cur[j + 1] % cur[j] !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res++;
      res %= M;
    }
  }
  return res;
};
var allPermutations = function (nums) {
  let ans = [];
  let vis = [];
  let dfs = function (cur) {
    if (cur.length === nums.length) {
      ans.push(cur.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!vis[i]) {
        vis[i] = true;
        cur.push(nums[i]);
        dfs(cur);
        cur.pop();
        vis[i] = false;
      }
    }
  };
  dfs([]);
  return ans;
};
let k = specialPerm([2, 3, 6]);
console.log(k);
