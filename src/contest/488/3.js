/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length;
  let ans = 0n;
  const minDq = new Deque();
  const maxDq = new Deque();

  let left = 0;

  for (let right = 0; right < n; right++) {
    while (!minDq.isEmpty() && nums[minDq.back()] >= nums[right]) {
      minDq.popBack();
    }
    minDq.pushBack(right);
    while (!maxDq.isEmpty() && nums[maxDq.back()] <= nums[right]) {
      maxDq.popBack();
    }
    maxDq.pushBack(right);
    while (left <= right) {
      const curMin = nums[minDq.front()];
      const curMax = nums[maxDq.front()];
      const diff = BigInt(curMax) - BigInt(curMin);
      const length = BigInt(right - left + 1);
      const cost = diff * length;

      if (cost <= BigInt(k)) {
        break; // 合法，停止收缩
      }

      // 窗口非法，left 右移
      left++;

      // 清理已过期索引（只清理头部）
      if (!minDq.isEmpty() && minDq.front() < left) {
        minDq.popFront();
      }
      if (!maxDq.isEmpty() && maxDq.front() < left) {
        maxDq.popFront();
      }
    }
    if (left <= right) {
      const cnt = right - left + 1;
      ans += BigInt(cnt);
    }
  }

  return Number(ans);
};
