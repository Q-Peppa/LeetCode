const meFn = (fn) => {
  const me = (...args) => {
    const key = args.join(',');
    if (me.cache[key]) {
      return me.cache[key];
    }
    return (me.cache[key] = fn(...args));
  };
  me.cache = {};
  return me;
};
const calc = (a, b, c, d) => {
  return a & (c + b + d);
};
/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
var countPairs = function (coordinates, k) {
  let ans = 0;
  const meCalc = meFn(calc);
  for (let i = 0; i < coordinates.length; i++) {
    for (let j = i + 1; j < coordinates.length; j++) {
      if (
        meCalc(
          coordinates[i][0],
          coordinates[i][1],
          coordinates[j][0],
          coordinates[j][1],
        ) === k
      ) {
        ans++;
      }
    }
  }
  return ans;
};
