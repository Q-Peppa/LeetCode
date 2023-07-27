class Pair {
  constructor(x1, y1) {
    this.x1 = x1;
    this.y1 = y1;
    this.x = x1;
    this.y = y1;
  }
  get first() {
    return this.x;
  }
  get second() {
    return this.y;
  }
  swap() {
    return new Pair(this.y, this.x);
  }
  toArray() {
    return [this.x, this.y];
  }
}
function firstCompleteIndex(arr, mat) {
  const NOT_FOUND = -1;
  const m = mat.length,
    n = mat[0].length;
  const map = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; ++j) {
      const val = mat[i][j];
      map.set(val, new Pair(i, j));
    }
  }
  const col = new Array(n).fill(0);
  const row = new Array(m).fill(0);
  for (let i = 0; i < arr.length; ++i) {
    const val = arr[i];
    const p = map.get(val);
    const [x, y] = p.toArray();
    row[x]++;
    col[y]++;
    if (row[x] === n || col[y] === m) {
      return i;
    }
  }
  return NOT_FOUND;
}
