/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = countGoodTriplets;

function countGoodTriplets(arr, a, b, c) {
  let count = 0;
  const n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      // 优化：先判断|arr[i]-arr[j]| <= a，不满足就跳过
      if (Math.abs(arr[i] - arr[j]) > a) continue;
      for (let k = j + 1; k < n; k++) {
        if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
          count++;
        }
      }
    }
  }
  return count;
}
