/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const map = new Map();
  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) + 1);
    } else {
      map.set(t[i], 1);
    }
  }
  let left = 0;
  let right = 0;
  let min = s.length + 1;
  let count = 0;
  while (right < s.length) {
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right]) - 1);
      if (map.get(s[right]) >= 0) {
        count++;
      }
    }
    while (count === t.length) {
      if (right - left + 1 < min) {
        min = right - left + 1;
      }
      if (map.has(s[left])) {
        map.set(s[left], map.get(s[left]) + 1);
        if (map.get(s[left]) > 0) {
          count--;
        }
      }
      left++;
    }
    right++;
  }
  return min === s.length + 1 ? '' : s.substring(left - 1, left - 1 + min);
};
console.log(minWindow('a', 'a'));
