class SegmentTree {
  constructor(nums, fn) {
    this.arr = nums;
    this.tree = [];
    this.init(0, 0, this.arr.length - 1);
    this.merge = fn;
  }
  init(node, s, e) {
    if (s === e) {
      this.tree[node] = this.arr[s];
      return;
    }
    const mid = (s + e) >> 1;
    const l = node * 2 + 1;
    const r = node * 2 + 2;
    this.build(l, s, mid);
    this.build(r, mid + 1, e);
    this.tree[node] = this.merge(this.tree[l], this.tree[r]);
  }
  query(l, r) {
    return this._query(0, 0, this.arr.length - 1, l, r);
  }
  _query(node, s, e, l, r) {
    if (l > e || r < s) return 0;
    if (l <= s && r >= e) return this.tree[node];
    const mid = (s + e) >> 1;
    const left = this._query(node * 2 + 1, s, mid, l, r);
    const right = this._query(node * 2 + 2, mid + 1, e, l, r);
    return this.merge(left, right);
  }
  update(i, val) {
    this._update(0, 0, this.arr.length - 1, i, val);
  }
  _update(node, s, e, i, val) {
    if (s === e) {
      this.tree[node] = val;
      return;
    }
    const mid = (s + e) >> 1;
    const l = node * 2 + 1;
    const r = node * 2 + 2;
    if (i <= mid) {
      this._update(l, s, mid, i, val);
    } else {
      this._update(r, mid + 1, e, i, val);
    }
    this.tree[node] = this.merge(this.tree[l], this.tree[r]);
  }
}
