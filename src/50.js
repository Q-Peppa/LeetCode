/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  return n > 0 ? pow(x, n) : 1 / pow(x, -n);
};

function pow(a, b, n) {
  //quick a ^ b then mod n , a maybe is double , and b maybe is negitive
  let res = 1,
    con = a;
  while (b > 0) {
    if (b % 2 == 1) res *= con;
    con *= con;
    b = Math.floor(b / 2);
  }
  return res;
}
