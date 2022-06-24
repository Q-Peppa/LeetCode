/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const res = [];
  function dfs(temp) {
    if (temp.length === nums.length) {
      res.push([...temp]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (temp.indexOf(nums[i]) === -1) {
        temp.push(nums[i]);
        dfs(temp);
        temp.pop();
      }
    }
  }
  dfs([]);
  return res;
};
console.log(permute([1, 2, 3]));
// console.log(encodeURI("下载问卷"));
