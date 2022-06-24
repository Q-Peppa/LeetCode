/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeBitwiseAnd = function (left, right) {
  while (right > left) {
    right &= right - 1
  }
  return right
}

console.log(rangeBitwiseAnd(5, 7))
console.log(rangeBitwiseAnd(0, 0))
console.log(rangeBitwiseAnd(1, 2147483647))
console.log(rangeBitwiseAnd(20000, 2147483647))
