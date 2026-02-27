/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minOperations = function (s, k) {
  const n = s.length;
  if (k > n) {
    return -1;
  }

  let zeros = 0;
  for (const ch of s) {
    if (ch === '0') {
      zeros++;
    }
  }

  if (zeros === 0) {
    return 0;
  }

  if (k === 0) {
    return -1;
  }

  for (let m = 1; m <= n; m++) {
    const total = m * k;
    if (total < zeros) {
      continue;
    }
    if (((total - zeros) & 1) !== 0) {
      continue;
    }

    let maxTotal = 0;
    if ((m & 1) === 0) {
      maxTotal = n * m - zeros;
    } else {
      maxTotal = n * m - (n - zeros);
    }

    if (total <= maxTotal) {
      return m;
    }
  }

  return -1;
};

console.log(minOperations('1111', 2), '1', 'ans is 0');
console.log(minOperations('1010', 2), '2', 'ans is 1');
console.log(minOperations('010', 2), '3', 'ans is -1');
console.log(minOperations('0000', 3), '4', 'ans is 4');

// Time Complexity: O(n)
// Space Complexity: O(1)
