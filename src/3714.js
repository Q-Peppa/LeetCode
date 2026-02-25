/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function (s) {
  let maxLength = 0;

  // Case 1: Substring has 'a', 'b', and 'c'
  const map3 = new Map();
  map3.set('0,0', -1);
  let c1 = 0,
    c2 = 0,
    c3 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') c1++;
    else if (s[i] === 'b') c2++;
    else c3++;
    const key = `${c1 - c2},${c1 - c3}`;
    if (map3.has(key)) {
      maxLength = Math.max(maxLength, i - map3.get(key));
    } else {
      map3.set(key, i);
    }
  }

  // Case 2: Substring has only two of the three characters
  const solveForTwo = (charsToConsider) => {
    const map2 = new Map();
    map2.set(0, -1);
    let count1 = 0,
      count2 = 0;
    for (let i = 0; i < s.length; i++) {
      if (!charsToConsider.has(s[i])) {
        // Reset on encountering a character we want to exclude
        map2.clear();
        map2.set(0, i);
        count1 = 0;
        count2 = 0;
        continue;
      }

      const [char1, char2] = [...charsToConsider];
      if (s[i] === char1) {
        count1++;
      } else {
        count2++;
      }

      const diff = count1 - count2;
      if (map2.has(diff)) {
        maxLength = Math.max(maxLength, i - map2.get(diff));
      } else {
        map2.set(diff, i);
      }
    }
  };

  solveForTwo(new Set(['a', 'b']));
  solveForTwo(new Set(['a', 'c']));
  solveForTwo(new Set(['b', 'c']));

  // Case 3: Substring has only one character ('a', 'b', or 'c')
  const solveForOne = (char) => {
    let currentCount = 0;
    let maxCount = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === char) {
        currentCount++;
        maxCount = Math.max(maxCount, currentCount);
      } else {
        currentCount = 0;
      }
    }
    return maxCount;
  };

  const maxA = solveForOne('a');
  const maxB = solveForOne('b');
  const maxC = solveForOne('c');
  maxLength = Math.max(maxLength, maxA, maxB, maxC);

  return maxLength;
};
