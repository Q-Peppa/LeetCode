/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
  return Math.max(1, n - 1);
};
console.log(distinctIntegers(5));
console.log(distinctIntegers(3));
console.log(distinctIntegers(99));
console.log(distinctIntegers(100));
