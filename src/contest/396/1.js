var isValid = function (word) {
  const vowels = 'aeiou';
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  let v = 0,
    c = 0;
  for (let i = 0; i < word.length; i++) {
    const ele = word[i].toLowerCase();
    if (vowels.includes(ele)) {
      v++;
    } else if (consonants.includes(ele)) {
      c++;
    }
  }
  return v > 0 && c > 0 && word.length >= 3 && word.match(/\W/) == null;
};
