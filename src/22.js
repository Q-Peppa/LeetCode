/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 1) return ['()'];
  const res = [];
  const gen = (path, l, r) => {
    if (path.length === n * 2) {
      res.push(path.join(''));
      return;
    }
    if (l > 0) {
      gen([...path, '('], l - 1, r);
    }
    if (r > l) {
      gen([...path, ')'], l, r - 1);
    }
  };
  gen([], n, n);
  return res;
};
