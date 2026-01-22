/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  const n = s.length;
  let [countA, countB, countC] = [0, 0, 0];

  for (const c of s) {
    if (c === 'a') countA++;
    else if (c === 'b') countB++;
    else countC++;
  }

  if (countA < k || countB < k || countC < k) return -1;

  const maxA = countA - k;
  const maxB = countB - k;
  const maxC = countC - k;

  let [a, b, c] = [0, 0, 0];
  let maxWindow = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    if (s[right] === 'a') a++;
    else if (s[right] === 'b') b++;
    else c++;

    while (a > maxA || b > maxB || c > maxC) {
      if (s[left] === 'a') a--;
      else if (s[left] === 'b') b--;
      else c--;
      left++;
    }

    maxWindow = Math.max(maxWindow, right - left + 1);
  }

  return n - maxWindow;
};
console.log(takeCharacters('aabaaaacaabc', 2), 'ans is 8');
console.log(takeCharacters('a', 1), 'ans is -1');
