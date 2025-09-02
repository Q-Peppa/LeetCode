import _ from 'lodash';

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const l = code.length;
  if (k === 0) return new Array(code.length).fill(0);
  const r = new Array(code.length).fill(0);
  for (let i = 0; i < code.length; i++) {
    if (k > 0) {
      for (let j = i + 1; j <= i + k; j++) {
        r[i] += code[(j + l) % l];
      }
    } else {
      for (let j = i + k; j < i; j++) {
        r[i] = code[(j + l) % l];
      }
    }
  }

  return r;
};

const f = decrypt([5, 7, 1, 4], 3);
console.log(f); // [12,10,16,13]
console.log(_.times(10, () => 0));
