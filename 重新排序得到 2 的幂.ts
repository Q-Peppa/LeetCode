function countNum(n: number): any {
  const cnt = new Array(10).fill(0)
  while (n) {
    cnt[n % 10]++
    n = Math.floor(n / 10)
  }
  return cnt.join("")
}
function reorderedPowerOf2(n: number): boolean {
  let s = new Set()
  for (let i = 1; i < 1e9; i <<= 1) {
    s.add(countNum(i))
  }
  return s.has(countNum(n))
};

console.log(!reorderedPowerOf2(10));
console.log(reorderedPowerOf2(1));
console.log(reorderedPowerOf2(16));
console.log(!reorderedPowerOf2(24));
console.log(reorderedPowerOf2(46));
