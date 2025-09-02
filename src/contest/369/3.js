// 区间最大值的线段树;
class SegmentTree {
  constructor(arr) {
    this.arr = arr;
    this.tree = [];
    this.build(0, 0, arr.length - 1);
  }

  build(node, start, end) {
    if (start === end) {
      this.tree[node] = this.arr[start];
      return;
    }
    const mid = (start + end) >> 1;
    const left = node * 2 + 1;
    const right = node * 2 + 2;
    this.build(left, start, mid);
    this.build(right, mid + 1, end);
    this.tree[node] = Math.max(this.tree[left], this.tree[right]);
  }

  query(node, start, end, qStart, qEnd) {
    if (qStart > end || qEnd < start) {
      return -Infinity;
    }
    if (qStart <= start && qEnd >= end) {
      return this.tree[node];
    }
    const mid = (start + end) >> 1;
    const left = node * 2 + 1;
    const right = node * 2 + 2;
    return Math.max(
      this.query(left, start, mid, qStart, qEnd),
      this.query(right, mid + 1, end, qStart, qEnd),
    );
  }
  update(index, value) {
    this.updateHelper(0, 0, this.arr.length - 1, index, value);
  }
  updateHelper(node, start, end, index, value) {
    if (start === end) {
      this.tree[node] = value;
      return;
    }
    const mid = (start + end) >> 1;
    const left = node * 2 + 1;
    const right = node * 2 + 2;
    if (index <= mid) {
      this.updateHelper(left, start, mid, index, value);
    } else {
      this.updateHelper(right, mid + 1, end, index, value);
    }
    this.tree[node] = Math.max(this.tree[left], this.tree[right]);
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minIncrementOperations = function (nums, k) {
  // if(nums.length)
  const st = new SegmentTree(nums);
  let res = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    const right = i + 2;
    const max = st.query(0, 0, nums.length - 1, i, right);
    res += max >= k ? 0 : k - max;
    if (k > max) {
      st.update(i + 1, k);
    }
  }
  return res;
};

console.log('minIncrementOperations', minIncrementOperations([1, 2, 6, 9], 8));
console.log(
  'minIncrementOperations',
  minIncrementOperations([43, 31, 14, 4], 73),
);

/**
 * [2,3,0,0,2]
 * 4
 * [0,1,3,3]
 * 5
 * [1,1,2]
 * 1
 * [1,2,6,9]
 * 8
 * [43,31,14,4]
 * 73
 * // 3,2,0,2,42
 */
