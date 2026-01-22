/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = [];
  let i = 0;

  while (i < words.length) {
    // determine how many words fit on this line
    let lineLen = words[i].length;
    let j = i + 1;
    while (j < words.length && lineLen + 1 + words[j].length <= maxWidth) {
      lineLen += 1 + words[j].length;
      j++;
    }

    const lineWords = words.slice(i, j);
    const isLastLine = j === words.length;
    let line = '';

    if (isLastLine) {
      // left-justified: words separated by single space, pad end
      line = lineWords.join(' ');
      line += ' '.repeat(maxWidth - line.length);
    } else {
      if (lineWords.length === 1) {
        // only one word on the line -> left-justify and pad spaces
        line = lineWords[0] + ' '.repeat(maxWidth - lineWords[0].length);
      } else {
        // distribute spaces evenly
        const totalChars = lineWords.reduce((sum, w) => sum + w.length, 0);
        const totalSpaces = maxWidth - totalChars;
        const slots = lineWords.length - 1;
        const baseSpace = Math.floor(totalSpaces / slots);
        let extra = totalSpaces % slots; // extra spaces to distribute to left slots

        for (let k = 0; k < lineWords.length; k++) {
          line += lineWords[k];
          if (k < lineWords.length - 1) {
            const spaces = baseSpace + (extra > 0 ? 1 : 0);
            line += ' '.repeat(spaces);
            if (extra > 0) extra--;
          }
        }
      }
    }

    res.push(line);
    i = j;
  }

  return res;
};
