/**
 * @param {number} n
 * @return {number}
 */
var monkeyMove = function (n) {
  let mod = 1e9 + 7;
  let res = 1n;
  let v = 2n;
  while (n > 0) {
    let t = n & 1;
    if (t === 1) {
      res = (res * BigInt(v)) % BigInt(mod);
    }
    v = (v * v) % BigInt(mod);
    n >>= 1;
  }
  res = Number(res);
  res = (res - 2 + mod) % mod;
  return res;
};

console.log(monkeyMove(500000003));
