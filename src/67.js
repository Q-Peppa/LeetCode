/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = "";
  let n = Math.max(a.length, b.length),
    curry = 0;
  for (let i = 0; i < n; ++i) {
    curry += i < a.length ? g(a[a.length - 1 - i]) : 0;
    curry += i < b.length ? g(b[b.length - 1 - i]) : 0;
    res = (curry % 2) + res;
    curry = Math.floor(curry / 2);
  }
  if (curry > 0) {
    res = "1" + res;
  }
  return res;
};
function g(char = "") {
  return char.charCodeAt(0) - "0".charCodeAt(0);
}
