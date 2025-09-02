/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function (n, target) {
  const sum = (i, j) => {
    return ((i + j) * (j - i + 1)) / 2;
  };
  let mid = Math.min(n >>> 1, target);
  const left = sum(1, mid);
  const right = sum(target, target + n - 1 - mid);
  return left + right;
};
