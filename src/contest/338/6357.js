/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function (nums, queries) {
  const ans = [];
  let queryMin = queries.reduce((a, b) => Math.max(a, b), 9999999999999);
  let times = 0;
  for (let ele of nums) {
    let up = 9999999999999,
      down = 9999999999999;
    if (ele > queryMin) {
      up = ele - queryMin;
    } else {
      down = queryMin - ele;
    }
    times += Math.min(up, down);
  }

  for (let i = 0; i < queries.length; i++) {
    let q = queries[i];
    if (q === queryMin) {
      ans.push(times);
    } else {
      ans.push();
    }
  }

  return ans;
};
console.log(minOperations([3, 1, 6, 8], [1, 5]));
