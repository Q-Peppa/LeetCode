/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const n = nums.length;
  const group = nums.reduce((pre, cur, i) => {
    if (pre[cur]) {
      pre[cur].push(i);
    } else {
      pre[cur] = [i];
    }
    return pre;
  }, {});
  if (Object.keys(group).length < 2) return 0;
  const findGroup = (start) => {
    for (let k in group) {
      if (group[k]?.includes(start)) {
        return k;
      }
    }
  };
  let ans = 0;
  let start = findGroup(0);

  console.log(group);
  // console.log('start', start);
  if (Number(start) !== 1 && group[1]?.length) {
    ans++;
    start = findGroup(1);
  }
  for (let i = 1; i < n; i++) {
    let cur = findGroup(i);
    if (cur < start) {
      ans++;
    }
    start = cur;
  }
  return ans;
};

console.log(minimumOperations([2, 1, 3, 2, 1]));
console.log(minimumOperations([1, 3, 2, 1, 3, 3]));
console.log(minimumOperations([2, 2, 2, 2, 3, 3]));

// [2,3,1,2]
console.log(minimumOperations([2, 3, 1, 2])); //2
