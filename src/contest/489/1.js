/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function (bulbs) {
  const res = [],
    t = {};
  for (const bulb of bulbs) {
    if (t[bulb]) t[bulb]++;
    else t[bulb] = 1;
  }
  for (const [key, value] of Object.entries(t)) {
    if (value % 2 === 1) res.push(key);
  }
  res.sort((a, b) => a - b);
  return res.map(Number);
};
