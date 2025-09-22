/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j > 0) grid[0][j] = grid[0][j - 1] + grid[0][j];
      else if (j === 0 && i > 0) grid[i][0] = grid[i - 1][0] + grid[i][0];
      else {
        if (i === 0 && j === 0) {
          continue;
        }
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
      }
    }
  }
  return grid.at(-1).at(-1);
};
