/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x >= 0 && ok(x);
};
function ok(x) {
  return x < 10 ? true : help(x) === x;
}

function help(x) {
  let temp = 0;
  while (x) {
    temp = temp * 10 + (x % 10);
    x = x / 10;
    x = Math.floor(x);
  }
  return temp;
}
