/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // Map to store last index of each character
  const lastIndex = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    // If we've seen this char and it's within the current window
    if (lastIndex.has(ch) && lastIndex.get(ch) >= left) {
      left = lastIndex.get(ch) + 1;
    }
    // Update last seen index for this character
    lastIndex.set(ch, right);
    // Update maximum length
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring('demo'));
// Additional test cases
console.log(lengthOfLongestSubstring('abcabcbb'), 'expect 3');
console.log(lengthOfLongestSubstring('bbbbb'), 'expect 1');
console.log(lengthOfLongestSubstring('pwwkew'), 'expect 3');
console.log(lengthOfLongestSubstring(''), 'expect 0');
console.log(lengthOfLongestSubstring('a'), 'expect 1');
console.log(lengthOfLongestSubstring('au'), 'expect 2');
