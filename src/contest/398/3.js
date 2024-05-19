/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function (nums) {
  /**
   * 车尔尼有一个数组 nums ，它只包含 正 整数，所有正整数的数位长度都 相同 。
   * 两个整数的 数位不同 指的是两个整数 相同 位置上不同数字的数目。
   * 请车尔尼返回 nums 中 所有 整数对里，数位不同之和。
   */
  let max = String(nums[0]).length;
  let res = 0;
  const solve = (index) => {
    // 处理第i个数位,有多少两两不同
    const map = new Map();
    let sum = 0;
    for (const num of nums) {
      const str = String(num);
      const key = str[index];
      if (map.has(key)) {
        map.set(key, map.get(key) + 1);
      } else {
        map.set(key, 1);
      }
    }
    for (const [key, value] of map) {
      sum += value * (nums.length - value);
    }
    return sum;
  };
  for (let i = 0; i < max; i++) {
    res += solve(i);
  }
  return res / 2;
};
