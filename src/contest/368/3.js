/**
 * @param {number[]} nums
 * @return {number}
 */
var minGroupsForValidAssignment = function (nums) {
  const n = nums.length;
  const m = new Map();
  for (const ele of nums) {
    m.set(ele, (m.get(ele) || 0) + 1);
  }

  if (m.size === 1) return 1;
  if (m.size === n) return n;
  const list = [...m.values()];
  const ok = (mid) => {
    let res = 0;
    for (const v of list) {
      let a = v % (mid + 1);
      let b = Math.floor(v / (mid + 1));
      if (a === 0 || a + b >= mid) {
        res += b + (a === 0 ? 0 : 1);
      } else {
        return -1;
      }
    }
    return res;
  };
  for (let i = Math.min(...list); i >= 1; i--) {
    const res = ok(i);
    if (res !== -1) {
      return res;
    }
  }

  return -1;
};
const a1 = minGroupsForValidAssignment([10, 10, 10, 3, 1, 1]); // 4

const a2 = minGroupsForValidAssignment([10, 10, 10, 10, 10, 10, 4, 5, 6, 3, 1]); //8
console.log([a1, a2]);
console.log('-----');
console.log(minGroupsForValidAssignment([2, 2, 3, 3, 3])); // 2

console.log('cast 4: ');
console.log(minGroupsForValidAssignment([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3])); // 4
