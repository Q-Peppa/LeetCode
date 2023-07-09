const join = (a, b) => {
  const lastA = a[a.length - 1];
  const firstB = b[0];
  return lastA === firstB ? a + b.slice(1) : a + b;
};
/**
 *
 * @param {string[]} words
 * @return {number}
 */
var minimizeConcatenatedLength = function (words) {
  const n = words.length;
  let ans = words[0];
  for (let i = 0; i < n; i++) {
    const val = words[i];
    const leftJoin = join(ans, val);
    const rightJoin = join(val, ans);
    const leftNext = join(leftJoin, words[i + 1]);
    ans = leftJoin.length < rightJoin.length ? leftJoin : rightJoin;
  }
  return ans.length;
};

//["a","bc","c"]
console.log(minimizeConcatenatedLength(['a', 'bc', 'c']));
