/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let res = 0;
  for (let i = 0; i < batteryPercentages.length; i++) {
    let f = true;
    if (batteryPercentages[i] > 0) {
      res++;
      f = false;
    }
    // res[i+1] to res[n] all -1
    if (!f) continue;
    for (let j = i + 1; j < batteryPercentages.length; j++) {
      if (batteryPercentages[j] > 0) batteryPercentages[j]--;
    }
  }
  return res;
};
