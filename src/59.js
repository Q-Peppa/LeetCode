/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }

  let num = 1;
  let top = 0,
    bottom = n - 1;
  let left = 0,
    right = n - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }

  return matrix;
};

console.log(generateMatrix(3), '1', 'ans is [[1,2,3],[8,9,4],[7,6,5]]');
console.log(generateMatrix(1), '2', 'ans is [[1]]');
