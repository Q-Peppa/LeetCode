/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const need = new Map();
  for (let i = 0; i < t.length; i++) {
    need.set(t[i], (need.get(t[i]) ?? 0) + 1);
  }

  let left = 0;
  let matched = 0;
  let bestLeft = 0;
  let bestLen = Number.POSITIVE_INFINITY;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) >= 0) {
        matched++;
      }
    }

    while (matched === t.length) {
      const len = right - left + 1;
      if (len < bestLen) {
        bestLen = len;
        bestLeft = left;
      }

      const d = s[left];
      if (need.has(d)) {
        need.set(d, need.get(d) + 1);
        if (need.get(d) > 0) {
          matched--;
        }
      }
      left++;
    }
  }

  return bestLen === Number.POSITIVE_INFINITY
    ? ''
    : s.slice(bestLeft, bestLeft + bestLen);
};

const testCases = [
  ['ADOBECODEBANC', 'ABC', 'BANC'],
  ['a', 'a', 'a'],
  ['a', 'aa', ''],
  ['ab', 'b', 'b'],
];

for (const [s, t, expected] of testCases) {
  const actual = minWindow(s, t);
  console.log(actual === expected, { s, t, actual, expected });
}

// Time complexity: O(|s| + |t|)
// Space complexity: O(|charset of t|)
