/**
 * @param {string} str
 * @return {string}
 */
const f = (str) => {
  return String.fromCharCode(...[...str].map((e) => e.charCodeAt(0) - 1));
};
/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function (s) {
  let i = s.indexOf('a');
  if (i === -1) {
    return f(s);
  }
  if (s.startsWith('a')) {
    return case2(s);
  }
  return f(s.slice(0, i)) + s.slice(i);
};
function case2(s) {
  const l = s.length;
  let i = 0;
  while (s[i] === 'a') i++;
  if (i === l) {
    let ans = s.split('');
    ans[l - 1] = 'z';
    return ans.join('');
  } // all 'a'
  return 'a'.repeat(i) + smallestString(s.slice(i));
}
