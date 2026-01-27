/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];
  const res = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  while (left <= right && top <= bottom) {
    // traverse top row
    for (let j = left; j <= right; j++) res.push(matrix[top][j]);
    top++;
    // traverse right column
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    right--;
    if (top <= bottom) {
      // traverse bottom row
      for (let j = right; j >= left; j--) res.push(matrix[bottom][j]);
      bottom--;
    }
    if (left <= right) {
      // traverse left column
      for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
      left++;
    }
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
);
