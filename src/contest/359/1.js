/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = (words, s) => words.map((e) => e[0]).join('') === s;
console.log(isAcronym(['an', 'apple'], 'aa'));
