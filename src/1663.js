/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  let total = n;

  let s = 'a'.repeat(n).split('');
  let dealIndex = n - 1;
  if (total === k) return s.join('');

  while (true) {
    let diff = k - total;
    if (diff < 26) {
      s[dealIndex] = String.fromCharCode(diff + s[dealIndex].charCodeAt(0));
      break;
    }
    s[dealIndex] = 'z';
    dealIndex--;
    k -= 25;
  }
  return s.join('');
};
console.log(getSmallestString(3, 27));

console.log('hello world');
console.log(getSmallestString(5, 73));
