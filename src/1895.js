/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxSize = 1;
  const getSum = (r1, c1, r2, c2) => {
    let sum = 0;
    for (let i = r1; i <= r2; i++) {
      for (let j = c1; j <= c2; j++) {
        sum += grid[i][j];
      }
    }
    return sum;
  };
  for (let size = 2; size <= Math.min(rows, cols); size++) {
    for (let r = 0; r <= rows - size; r++) {
      for (let c = 0; c <= cols - size; c++) {
        const targetSum = getSum(r, c, r, c + size - 1);
        let isMagic = true;
        for (let i = 0; i < size; i++) {
          let rowSum = 0;
          let colSum = 0;
          for (let j = 0; j < size; j++) {
            rowSum += grid[r + i][c + j];
            colSum += grid[r + j][c + i];
          }
          if (rowSum !== targetSum || colSum !== targetSum) {
            isMagic = false;
            break;
          }
        }
        if (isMagic) {
          let diag1Sum = 0;
          let diag2Sum = 0;
          for (let i = 0; i < size; i++) {
            diag1Sum += grid[r + i][c + i];
            diag2Sum += grid[r + i][c + size - 1 - i];
          }
          if (diag1Sum === targetSum && diag2Sum === targetSum) {
            maxSize = Math.max(maxSize, size);
          }
        }
      }
    }
  }
  return maxSize;
};
console.log(
  largestMagicSquare([
    [7, 1, 4, 5, 6],
    [2, 5, 1, 6, 4],
    [1, 5, 4, 3, 2],
    [1, 2, 7, 3, 4],
  ]),
);

console.log(
  largestMagicSquare([
    [5, 1, 3, 1],
    [9, 3, 3, 1],
    [1, 3, 3, 8],
  ]),
);
