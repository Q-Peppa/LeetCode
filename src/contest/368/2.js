class SegmentTree {
  // 最小值的线段树
  constructor(nums, merge) {
    this.data = nums;
    this.merge = merge;
    this.tree = new Array(nums.length * 4);
    this.buildSegmentTree(0, 0, nums.length - 1);
  }
  leftChild(index) {
    return index * 2 + 1;
  }
  rightChild(index) {
    return index * 2 + 2;
  }
  buildSegmentTree(treeIndex, left, right) {
    if (left === right) {
      this.tree[treeIndex] = this.data[left];
      return;
    }
    const mid = Math.floor((left + right) / 2);
    const leftTreeIndex = this.leftChild(treeIndex);
    const rightTreeIndex = this.rightChild(treeIndex);
    this.buildSegmentTree(leftTreeIndex, left, mid);
    this.buildSegmentTree(rightTreeIndex, mid + 1, right);
    this.tree[treeIndex] = this.merge(
      this.tree[leftTreeIndex],
      this.tree[rightTreeIndex],
    );
  }
  query(left, right) {
    if (
      left < 0 ||
      left >= this.data.length ||
      right < 0 ||
      right >= this.data.length ||
      left > right
    ) {
      throw new Error('Index is illegal.');
    }
    return this._query(0, 0, this.data.length - 1, left, right);
  }
  _query(treeIndex, left, right, queryLeft, queryRight) {
    if (left === queryLeft && right === queryRight) {
      return this.tree[treeIndex];
    }
    const mid = Math.floor((left + right) / 2);
    const leftTreeIndex = this.leftChild(treeIndex);
    const rightTreeIndex = this.rightChild(treeIndex);
    if (queryLeft >= mid + 1) {
      return this._query(rightTreeIndex, mid + 1, right, queryLeft, queryRight);
    } else if (queryRight <= mid) {
      return this._query(leftTreeIndex, left, mid, queryLeft, queryRight);
    }
    const leftResult = this._query(leftTreeIndex, left, mid, queryLeft, mid);
    const rightResult = this._query(
      rightTreeIndex,
      mid + 1,
      right,
      mid + 1,
      queryRight,
    );
    return this.merge(leftResult, rightResult);
  }
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  // 区间最值
  const segmentTree = new SegmentTree(nums, Math.min);
  const n = nums.length;
  // i < j < k
  // nums[i] < nums[j] 且 nums[k] < nums[j]
  // nums[i] + nums[j] + nums[k] 最小
  let ans = 10 ** 9 + 1;
  for (let j = 1; j < n - 1; j++) {
    const left = segmentTree.query(0, j - 1);
    if (left >= nums[j]) continue;
    const right = segmentTree.query(j + 1, n - 1);
    if (right >= nums[j]) continue;
    ans = Math.min(ans, left + nums[j] + right);
  }
  return ans === 10 ** 9 + 1 ? -1 : ans;
};

console.log(minimumSum([8, 6, 1, 5, 3]));
console.log(minimumSum([5, 4, 8, 7, 10, 2]));
console.log(minimumSum([6, 5, 4, 3, 4, 5]));
const randomArray = (length, max) =>
  Array.from({ length }, () => Math.floor(Math.random() * max));

const ans = randomArray(10 ** 5, 10 ** 8);
console.time('randomArray');
console.log(minimumSum(ans));
console.timeEnd('randomArray');
