/**
 * type T = 0 | 1 | 2
 * @param {T[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function (grid) {
  const n = grid.length;
  const center = Math.floor(n / 2);
  const yNumber = n + center;
  const otherNumber = n ** 2 - yNumber;
  const yMap = {},
    otherMap = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i <= center) {
        if (i === j || i + j === n - 1) {
          yMap[grid[i][j]] = (yMap[grid[i][j]] || 0) + 1;
        } else {
          otherMap[grid[i][j]] = (otherMap[grid[i][j]] || 0) + 1;
        }
      } else {
        if (j === center) {
          yMap[grid[i][j]] = (yMap[grid[i][j]] || 0) + 1;
        } else {
          otherMap[grid[i][j]] = (otherMap[grid[i][j]] || 0) + 1;
        }
      }
    }
  }
  const queryCost = (map, cur) => {
    switch (cur) {
      case 0:
        return (map[1] || 0) + (map[2] || 0);
      case 1:
        return (map[0] || 0) + (map[2] || 0);
      case 2:
        return (map[0] || 0) + (map[1] || 0);
    }
    throw new Error('unreachable');
  };
  const yCost = [],
    otherCost = [];
  for (let i = 0; i < 3; i++) {
    yCost[i] = queryCost(yMap, i);
    otherCost[i] = queryCost(otherMap, i);
  }
  console.log('mp', yMap, otherMap);
  console.log('cs', yCost, otherCost);
  const cost = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) continue;
      cost.push(yCost[i] + otherCost[j]);
    }
  }
  return Math.min(...cost);
};
