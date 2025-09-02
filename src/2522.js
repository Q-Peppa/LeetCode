/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function (s, k) {
  const length = s.length;
  const temp = [];
  let i = 0,
    j = 1;

  while (true) {
    let f = s[i];
    if (Number(f) > k) {
      return -1;
    }
    while (Number(f + s[j]) <= k && j < length) {
      f += Number(s[j]);
      j++;
    }
    i = j;
    j++;
    temp.push(f);
    if (i >= length) break;
  }
  // console.log(temp);
  return temp.length;
};
console.log(minimumPartition('9'.repeat(10 ** 5 - 1), 10 ** 9));
console.log(minimumPartition('238182', 5));
