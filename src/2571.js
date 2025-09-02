const easy = (n) => {
  for (let i = 0; i < 20; i++) {
    if (2 ** i < n && 2 ** (i + 1) > n) return i;
  }
  return -1;
};

/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  const pow2 = [];
  for (let i = 0; i < 20; i++) {
    pow2.push(2 ** i);
  }
  if (pow2.includes(n)) return 1;
  const d = (curr, count) => {
    let k = easy(curr);
    let l = 2 ** k;
    let r = 2 ** (k + 1);
    if (
      pow2.includes(curr) ||
      pow2.includes(curr - l) ||
      pow2.includes(r - curr)
    ) {
      return count + 1;
    } else return Math.min(d(curr - l, count + 1), d(r - curr, count + 1));
  };

  return d(n, 1);
};
