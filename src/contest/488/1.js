/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function (nums) {
  // 处理边界情况：数组长度小于2时，没有主导元素
  if (nums.length < 2) {
    return 0;
  }

  const n = nums.length;
  // 定义后缀和数组，suffixSum[i] 表示 nums[i] 到 nums[n-1] 的总和
  const suffixSum = new Array(n).fill(0);
  // 从后往前计算后缀和
  suffixSum[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + nums[i];
  }

  let count = 0;
  // 遍历除最后一个元素外的所有下标
  for (let i = 0; i < n - 1; i++) {
    // 右侧元素的个数：从i+1到n-1，共 (n-1) - (i+1) + 1 = n - i - 1 个
    const rightCount = n - i - 1;
    // 右侧元素的总和：suffixSum[i+1]
    const rightSum = suffixSum[i + 1];
    // 计算右侧元素的平均值
    const average = rightSum / rightCount;
    // 判断当前元素是否大于平均值，满足则计数+1
    if (nums[i] > average) {
      count++;
    }
  }

  return count;
};
