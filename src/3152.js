/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  const n = nums.length;
  const m = queries.length;
  const ans = new Array(m).fill(false);

  const parity = new Array(n);
  for (let i = 0; i < n; i++) {
    parity[i] = nums[i] % 2;
  }

  const bad = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    bad[i] = bad[i - 1] + (parity[i] === parity[i - 1] ? 1 : 0);
  }

  for (let i = 0; i < m; i++) {
    const [from, to] = queries[i];
    ans[i] = bad[to] === bad[from];
  }

  return ans;
};

console.log(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]]), '1', 'ans is [false]');

console.log(
  isArraySpecial(
    [4, 3, 1, 6],
    [
      [0, 2],
      [2, 3],
    ],
  ),
  '2',
  'ans is [false,true]',
);
