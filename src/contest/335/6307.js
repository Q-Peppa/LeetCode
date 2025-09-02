/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  if (time < n) return time + 1;
  // dir = true 从左到右, dir = false 从右到左
  let dir = true;
  let index = 1;
  while (time > 0) {
    if (dir) {
      index++;
      time--;
      if (index === n) {
        dir = false;
      }
    } else {
      index--;
      time--;
      if (index === 1) {
        dir = true;
      }
    }
  }
  return index;
};

console.log(passThePillow(4, 5));
console.log(passThePillow(3, 2));
console.log(passThePillow(9, 4));
console.log(passThePillow(18, 38)); //5
console.log(passThePillow(1000, 1000)); //5
