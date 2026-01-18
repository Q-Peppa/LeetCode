/**
 * @param {string} s
 * @return {string}
 */
function lexSmallestAfterDeletion(s) {
  const n = s.length;
  if (n === 0) return '';

  const positions = Array.from({ length: 26 }, () => []);
  const lastIndex = new Array(26).fill(-1);
  for (let i = 0; i < n; i++) {
    const code = s.charCodeAt(i) - 97;
    positions[code].push(i);
    lastIndex[code] = i;
  }

  const required = new Array(26).fill(false);
  let remaining = 0;
  for (let c = 0; c < 26; c++) {
    if (lastIndex[c] !== -1) {
      required[c] = true;
      remaining++;
    }
  }

  const ptr = new Array(26).fill(0);
  let start = 0;
  const result = [];

  while (remaining > 0) {
    let minLast = n;
    for (let c = 0; c < 26; c++) {
      if (required[c] && lastIndex[c] < minLast) {
        minLast = lastIndex[c];
      }
    }

    let chosenChar = -1;
    let chosenPos = -1;

    for (let c = 0; c < 26; c++) {
      while (ptr[c] < positions[c].length && positions[c][ptr[c]] < start) {
        ptr[c]++;
      }
      if (ptr[c] < positions[c].length) {
        const pos = positions[c][ptr[c]];
        if (pos <= minLast) {
          chosenChar = c;
          chosenPos = pos;
          break;
        }
      }
    }

    if (chosenChar === -1) break;

    result.push(String.fromCharCode(97 + chosenChar));
    if (required[chosenChar]) {
      required[chosenChar] = false;
      remaining--;
    }
    ptr[chosenChar]++;
    start = chosenPos + 1;
  }

  return result.join('');
}
console.log(lexSmallestAfterDeletion('aaccb'));
console.log(lexSmallestAfterDeletion('z'));
