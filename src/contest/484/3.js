/**
 * @param {string[]} words
 * @return {number}
 */
var countPairs = function (words) {
  const map = new Map();
  let count = 0;

  for (const word of words) {
    if (word.length === 0) continue;

    // Normalize the word so it starts with 'a'
    // Calculate the shift needed for the first character to become 0 ('a')
    const firstCharCode = word.charCodeAt(0);
    const shift = firstCharCode - 97; // 'a' is 97

    let key = '';
    // Build the key character by character
    // Optimization: Since n*m <= 10^5, constructing strings is fine.
    // We can also use an array and join, but string concatenation is often optimized.
    // Given the constraints, let's use an array for the characters to be safe with large m.
    const keyChars = new Array(word.length);
    for (let i = 0; i < word.length; i++) {
      let charCode = word.charCodeAt(i) - 97;
      let diff = (charCode - shift + 26) % 26;
      keyChars[i] = String.fromCharCode(diff + 97);
    }
    key = keyChars.join('');

    if (map.has(key)) {
      count += map.get(key);
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }

  return count;
};
