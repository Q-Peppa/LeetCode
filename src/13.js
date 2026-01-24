/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map();
  let res = 0;
  map.set('IX', 9);
  map.set('XL', 40);
  map.set('XC', 90);
  map.set('CD', 400);
  map.set('CM', 900);
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);
  for (const key of map.keys()) {
    let count = 0;
    while (s.includes(key)) {
      count++;
      s = s.replace(key, '');
    }
    res += count * map.get(key);
  }
  return res;
};
