/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const e = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let index = 0,
    res = "";
  while (index < 100) {
    while (num >= e[index]) {
      res += romans[index];
      num -= e[index];
    }
    if (num < 0) break;
    index++;
  }
  return res;
};
