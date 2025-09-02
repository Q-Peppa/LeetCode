/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
import _ from 'lodash';

const buddyStrings = function (s, goal) {
  const len = s.length;
  const res = [];
  if (s.length !== goal.length || s.length < 2 || goal.length < 2) {
    return false;
  }
  if (s === goal && new Set(s).size < len) {
    return true;
  }
  for (const [a, b] of _.zip(s.split(''), goal.split(''))) {
    if (a !== b) {
      res.push([a, b]);
    }
  }
  return res.length === 2 && _.isEqual(res[0], res[1].reverse());
};
console.log(buddyStrings('ab', 'ba'));
