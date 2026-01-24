/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (s.length === 0 || words.length === 0) {
    return [];
  }
  var result = [];
  var wordLen = words[0].length;
  var wordCount = words.length;
  var wordMap = {};
  for (let i = 0; i < words.length; i++) {
    if (wordMap[words[i]] === undefined) {
      wordMap[words[i]] = 1;
    } else {
      wordMap[words[i]]++;
    }
  }
  for (let i = 0; i < s.length - wordLen * wordCount + 1; i++) {
    var tempMap = {};
    for (var i = 0; i < wordCount; i++) {
      var word = s.substring(i + i * wordLen, i + (i + 1) * wordLen);
      if (wordMap[word] === undefined) {
        break;
      }
      if (tempMap[word] === undefined) {
        tempMap[word] = 1;
      } else {
        tempMap[word]++;
      }
      if (tempMap[word] > wordMap[word]) {
        break;
      }
      if (i === wordCount - 1) {
        result.push(i);
      }
    }
  }
  return result;
};
