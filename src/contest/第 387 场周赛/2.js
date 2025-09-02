/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  const m = grid.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0) {
        grid[i][j] = grid[i][j] + (grid[i][j - 1] || 0);
      }
      if (j === 0) {
        grid[i][j] = grid[i][j] + (grid[i - 1]?.[j] || 0);
      }
      if (i > 0 && j > 0) {
        grid[i][j] += grid[i][j - 1] + grid[i - 1][j] - grid[i - 1][j - 1];
      }
    }
  }
  console.log(grid);
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] <= k) {
        result++;
      }
    }
  }
  return result;
};
