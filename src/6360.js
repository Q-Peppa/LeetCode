/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  const map = new Map();
  // init map
  const find = (val, s) => {
    for (let i = s; i < nums.length; i++) {
      const temp = nums[i];
      if (temp === val && !map.has(`${val}_`)) {
        const n = map.get(val) || [];

        const newVal = n.includes(i) ? n : [...n, i];
        map.set(val, newVal);
      }
    }
  };
  console.time('demo');
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(`${nums[i]}_`)) {
      find(nums[i], i);
    }

    map.set(`${nums[i]}_`, i);
  }
  console.timeEnd('demo');
  const res = [];
  console.time('demo2');
  for (let i = 0; i < nums.length; i++) {
    const k = map.get(nums[i]);
    let v = 0;
    for (let j = 0; j < k.length; j++) {
      if (k[j] === i) continue;
      else v += Math.abs(k[j] - i);
    }
    res.push(v);
  }
  console.timeEnd('demo2');
  return res;
};

const testArr = [];
for (let i = 0; i <= 50000; i++) {
  testArr.push(10 ** 9);
}
console.log(distance(testArr)); //[5,0,3,4,0]
// 100000 1000000
