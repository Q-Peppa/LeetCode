/**
 * @param {string} s
 * @return {number}
 */
var vowelConsonantScore = function (s) {
  let vowels = 0,
    consonants = 0;
  for (let char of s) {
    if ("aeiou".includes(char)) {
      vowels++;
    } else if (char >= "a" && char <= "z") {
      consonants++;
    }
  }
  if (consonants === 0) return 0;
  return Math.floor(vowels / consonants);
};
/**
 * 
 * 给你一个字符串 s，由小写英文字母、空格和数字组成。

令 v 表示 s 中元音字母的数量，c 表示辅音字母的数量。

元音字母是 'a'、'e'、'i'、'o' 和 'u'，而英文字母表中除元音外的其他字母均视为辅音字母。

字符串 s 的 得分 定义如下：

如果 c > 0，则 score = floor(v / c)，其中 floor 表示 向下取整 到最接近的整数。
否则，如果 c = 0，则 score = 0。
返回一个整数，表示字符串的得分。
 */
