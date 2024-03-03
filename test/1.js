import _ from 'lodash';
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  const l = nums.length;
  nums.sort((a, b) => a - b);
  let pure = new Set(nums);
  if (pure.size === l) return 1;
  const feq = _.countBy(nums);
  const queryUpper = (x) => {
    let up = 0,
      inner = 0;
    while (feq[x]) {
      up++;
      feq[x] -= 1;
      x *= x;
      inner = 1;
    }
    if (inner) {
      x = Math.sqrt(x);
      x = Math.sqrt(x);
    } else {
      x = Math.sqrt(x);
    }

    let down = 0;
    while (!feq[x]) {
      x = Math.sqrt(x);
      if (x < 2) break;
    }
    while (feq[x]) {
      down++;
      feq[x] -= 1;
      x = Math.sqrt(x);
    }
    if (down === 0) return 1;
    // console.log(up, down)
    return up + down;
  };
  let ans = 0;
  if (feq[1]) {
    if (feq[1] % 2 === 0) ans = feq[1] - 1;
    else ans = feq[1];
  }

  for (const x of nums) {
    if (x === 1) continue;
    if (feq[x]) {
      let up = queryUpper(x);
      ans = Math.max(up, ans);
    }
  }
  return ans;
};

maximumLength([2, 4, 16, 2]);
