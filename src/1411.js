/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function (n) {
  const MOD = 1e9 + 7;
  let a = BigInt(6); // patterns like ABA
  let b = BigInt(6);
  for (let i = 2; i <= n; i++) {
    const na = BigInt(3) * a + BigInt(2) * b;
    const nb = BigInt(2) * a + BigInt(2) * b;
    a = na;
    b = nb;
  }
  return Number((a + b) % BigInt(MOD));
};
console.log(numOfWays(1));
console.log(numOfWays(5000));
console.log(numOfWays(7));
