/**
 * @param {string} num
 * @return {boolean}
 */
const isAdditiveNumber = function (num) {
  function dfs(cur, tmp) {
    const n = tmp.length;
    if (n >= 3 && tmp[n - 3] + tmp[n - 2] !== tmp[n - 1]) return false;
    if (cur === num.length && n >= 3) {
      return true;
    }
    for (let i = cur; i < num.length; i++) {
      if (num[cur] === '0' && cur !== i) break;
      tmp.push(num.slice(cur, i + 1) - 0);
      if (dfs(i + 1, tmp)) {
        return true;
      }
      tmp.pop();
    }
    return false;
  }

  return dfs(0, []);
};
console.log(isAdditiveNumber('112358'));
console.log(isAdditiveNumber('199100199'));
