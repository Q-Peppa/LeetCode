/**
 * @description 给你一个整数数组 nums 。
 * 一个正整数 x 的任何一个 严格小于 x 的 正 因子都被称为 x 的 真因数 。比方说 2 是 4 的 真因数，但 6 不是 6 的 真因数。
 * 你可以对 nums 的任何数字做任意次 操作 ，一次 操作 中，你可以选择 nums 中的任意一个元素，将它除以它的 最大真因数 。
 * 你的目标是将数组变为 非递减 的，请你返回达成这一目标需要的 最少操作 次数。
 * 如果 无法 将数组变成非递减的，请你返回 -1 。
 *
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {};

console.log(minOperations([25, 7]));
console.log(minOperations([7, 7, 7, 6]));
console.log(minOperations([1, 1, 1, 1]));
