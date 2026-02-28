/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  const MOD = 1000000007n;
  let ans = 0n;
  let bitLen = 0;

  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) === 0) {
      bitLen++;
    }
    ans = ((ans << BigInt(bitLen)) + BigInt(i)) % MOD;
  }

  return Number(ans);
};

console.log(concatenatedBinary(1), '1', 'ans is 1');
console.log(concatenatedBinary(3), '2', 'ans is 27');
console.log(concatenatedBinary(12), '3', 'ans is 505379714');

// Time Complexity: O(n)
// Space Complexity: O(1)
