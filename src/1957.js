/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let empty = "";
  let count = 0,
    pre = "";
  for (let i = 0; i < s.length; i++) {
    if (!pre) {
      pre = s[i];
      count = 1;
    }
    if (pre !== s[i]) {
      pre = s[i];
      count = 1;
    }
    if (count < 3) {
      count++;
      empty += s[i];
    }
  }
  // console.log(`empty`, empty);
  return empty;
};
makeFancyString("leeetcode");
makeFancyString("aaabaaaa");
makeFancyString("aab");
