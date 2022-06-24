/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ]
  const set = new Set()
  for (let i = 0; i < words.length; i++) {
    let str = ''
    for (let j = 0; j < words[i].length; j++) {
      str += morse[words[i].charCodeAt(j) - 97]
    }
    set.add(str)
  }
  return set.size
}
