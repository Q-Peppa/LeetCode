let total = (arr) => {
  let sum = 0;
  for (let i = 0; i < 26; i++) {
    sum += arr[i] > 0 ? 1 : 0;
  }
  return sum;
};
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function (word1, word2) {
  let counter1 = new Array(26).fill(0);
  let counter2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    let temp = word1.charCodeAt(i) - 97;
    counter1[temp]++;
  }
  for (let i = 0; i < word2.length; i++) {
    let temp = word2.charCodeAt(i) - 97;
    counter2[temp]++;
  }
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; ++j) {
      if (counter1[i] > 0 && counter2[j] > 0) {
        counter1[i]--;
        counter2[i]++;
        counter2[j]--;
        counter1[j]++;
        if (total(counter1) === total(counter2)) return true;
        counter1[i]++;
        counter2[i]--;
        counter2[j]++;
        counter1[j]--;
      }
    }
  }
  return false;
};
