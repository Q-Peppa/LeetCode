/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  let right = matrix[0].length - 1;
  let down = 0;
  while (right >= 0 && down < matrix.length) {
    if (matrix[down][right] > target) {
      right--;
    } else if (matrix[down][right] < target) {
      down++;
    } else if (matrix[down][right] === target) {
      console.log(down, right);
      return true;
    }
  }
  return false;
};
console.log(searchMatrix([[-5]], -5));
