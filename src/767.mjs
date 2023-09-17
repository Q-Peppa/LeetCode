import _ from 'lodash';
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const length = s.length;
  if (s.length === 1) return s;
  if (s.length === 2) {
    if (s[0] === s[1]) return '';
    else return s;
  }
  let seq = _.countBy(s);
  for (let k in seq) {
    if (seq[k] > Math.ceil(length / 2)) return '';
  }
  seq = _.toPairs(seq).sort((a, b) => b[1] - a[1]);
  let ans = new Array(length);
  let i = 0;

  while (seq.length) {
    let [k, v] = seq.shift();
    while (v--) {
      ans[i] = k;
      i += 2;
      if (i >= length) i = 1;
    }
  }
  return ans.join('');
};

console.log(reorganizeString('aab'));
console.log(reorganizeString('aabbcc'));
console.log(Array.from(Object.values({ a: 1, b: 2 })));
