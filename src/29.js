/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  // Handle overflow case: -2^31 / -1 = 2^31 (overflows 32-bit signed int)
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  // Determine sign
  const sign = dividend >= 0 === divisor >= 0 ? 1 : -1;

  // Use absolute values.
  // Note: Math.abs(-2147483648) returns 2147483648, which is safe in JS (double precision).
  let n = Math.abs(dividend);
  let d = Math.abs(divisor);
  let result = 0;

  // Optimization: Pre-calculate powers of two multiples of divisor
  // This allows us to subtract the largest possible chunk in one go (O(log N))
  const doubles = [];
  const powers = [];

  let tempD = d;
  let power = 1;

  // Build doubling sequence: d, 2d, 4d, 8d... until > n
  // Using addition to simulate multiplication by 2
  while (tempD <= n) {
    doubles.push(tempD);
    powers.push(power);

    // Check bounds before adding to prevent infinite loop or unnecessary work
    // though JS Numbers are large enough for this problem's constraints
    if (n - tempD < tempD) break;

    tempD += tempD;
    power += power;
  }

  // Iterate backwards and subtract
  for (let i = doubles.length - 1; i >= 0; i--) {
    if (n >= doubles[i]) {
      n -= doubles[i];
      result += powers[i];
    }
  }

  return sign === 1 ? result : -result;
};

// Time Complexity: O(log N)
// Space Complexity: O(log N)

console.log(divide(10, 3), 'Expected: 3');
console.log(divide(7, -3), 'Expected: -2');
console.log(divide(-2147483648, -1), 'Expected: 2147483647');
console.log(divide(-2147483648, 1), 'Expected: -2147483648');
