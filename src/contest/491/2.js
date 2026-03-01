/**
 * @param {number} n
 * @return {number}
 */
var minCost = function (n) {
  return (n * (n - 1)) / 2;
};

console.log(minCost(1), 'case1', 'ans = 0');
console.log(minCost(2), 'case2', 'ans = 1');
console.log(minCost(5), 'case3', 'ans = 10');

// Time: O(1)
// Space: O(1)
