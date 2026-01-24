/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (!s || !words || words.length === 0) return [];

  const wordLen = words[0].length;
  const wordCount = words.length;
  const totalLen = wordLen * wordCount;
  const n = s.length;
  const result = [];

  if (n < totalLen) return [];

  // Frequency map for words
  const counts = new Map();
  for (const word of words) {
    counts.set(word, (counts.get(word) || 0) + 1);
  }

  // Iterate with offset from 0 to wordLen - 1
  for (let i = 0; i < wordLen; i++) {
    let left = i;
    let right = i;
    let currentMap = new Map();
    let count = 0;

    while (right + wordLen <= n) {
      const w = s.substring(right, right + wordLen);
      right += wordLen;

      if (counts.has(w)) {
        currentMap.set(w, (currentMap.get(w) || 0) + 1);
        count++;

        // If we have more of 'w' than needed, shrink from left
        while (currentMap.get(w) > counts.get(w)) {
          const leftWord = s.substring(left, left + wordLen);
          currentMap.set(leftWord, currentMap.get(leftWord) - 1);
          count--;
          left += wordLen;
        }

        // Window size matches
        if (count === wordCount) {
          result.push(left);
        }
      } else {
        // Reset window
        currentMap.clear();
        count = 0;
        left = right;
      }
    }
  }

  return result;
};

// Time Complexity: O(N * M), N = s.length, M = word.length
// Space Complexity: O(K * M), K = words.length

console.log(
  findSubstring('barfoothefoobarman', ['foo', 'bar']),
  'Expected: [0,9]',
);
console.log(
  findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']),
  'Expected: []',
);
console.log(
  findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']),
  'Expected: [6,9,12]',
);
