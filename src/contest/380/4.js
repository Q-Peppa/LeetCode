function getNext(pattern) {
  const next = [-1];
  let i = 0;
  let j = -1;
  while (i < pattern.length) {
    if (j === -1 || pattern[i] === pattern[j]) {
      i++;
      j++;
      next[i] = j;
    } else {
      j = next[j];
    }
  }
  return next;
}
function kmp(source, pattern) {
  const res = [];
  const next = getNext(pattern);
  let i = 0;
  let j = 0;
  while (i < source.length) {
    if (j === -1 || source[i] === pattern[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
    if (j === pattern.length) {
      res.push(i - j);
      j = next[j];
    }
  }
  return res;
}
/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function (s, a, b, k) {
  let range = s.length - a.length;
  const bindex = [],
    aindex = [];

  // 统计s中a和b的位置, kmp算法
  aindex.push(...kmp(s, a));
  bindex.push(...kmp(s, b));
  console.log(aindex, bindex);
  const res = [],
    abs = Math.abs;

  const query = (cur) => {
    let left = 0,
      right = bindex.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (abs(bindex[mid] - cur) <= k) return mid;
      else if (bindex[mid] < cur) left = mid + 1;
      else right = mid - 1;
    }
    return -100;
  };

  for (let i = 0; i < aindex.length; i++) {
    let cur = aindex[i];
    if (query(cur) !== -100) {
      res.push(cur);
    }
  }
  return res;
};
console.log(beautifulIndices('ababababazzabababb', 'aba', 'bb', 10));
