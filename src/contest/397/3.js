/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function (grid) {
  // 注意!!!, 此代码无法通过测试 , 但是这一题的理念是, a2 - a1 + a3 - a2.... 所以实质是求一个起点方块,
  // 一个终点方块, 使得终点方块的值最大, 起点方块的值最小 , 但是每次只能向下或者向右移动.
  const m = grid.length;
  const n = grid[0].length;
  let curMax, curX, curY;
  let res = -1e9;
  const getMax = (i, j) => {
    let res = -1e9;
    for (let x = i; x < m; x++) {
      for (let y = j; y < n; y++) {
        if (x === i && y === j) continue;
        if (grid[x][y] >= res) {
          res = grid[x][y];
          curX = x;
          curY = y;
        }
      }
    }
    curMax = res;
    return res;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      console.log('==', i, j, curMax);
      if (curMax >= grid[i][j] && i < curX && j < curY) {
        res = Math.max(res, curMax - grid[i][j]);
        continue;
      }

      let max = getMax(i, j);
      res = Math.max(res, max - grid[i][j]);
    }
  }
  return res;
};
