/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
const isAcronym = (words, s) => words.map((e) => e[0]).join('') === s;
console.log(isAcronym(['an', 'apple'], 'aa'));
