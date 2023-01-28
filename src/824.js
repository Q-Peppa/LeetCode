/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let ans = '';
  let arr = sentence.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let w = arr[i];
    if (vowel.includes(w[0])) {
      ans += w + 'ma' + 'a'.repeat(i + 1) + ' ';
    } else {
      ans += w.slice(1) + w[0] + 'ma' + 'a'.repeat(i + 1) + ' ';
    }
  }
  return ans.trim();
};

console.log(toGoatLatin('I speak Goat Latin'));
console.log(toGoatLatin('The quick brown fox jumped over the lazy dog'));
