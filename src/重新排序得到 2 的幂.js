function countNum(n) {
  const cnt = new Array(10).fill(0);
  while (n) {
    cnt[n % 10]++;
    n = Math.floor(n / 10);
  }
  return cnt.join('');
}
function reorderedPowerOf2(n) {
  const s = new Set();
  for (let i = 1; i < 1e9; i <<= 1) {
    s.add(countNum(i));
  }
  return s.has(countNum(n));
}
console.log(reorderedPowerOf2(10) === false);
console.log(reorderedPowerOf2(1) === true);
console.log(reorderedPowerOf2(16) === true);
console.log(reorderedPowerOf2(24) === false);
console.log(reorderedPowerOf2(46) === true);
