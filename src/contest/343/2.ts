class Pair {
  x: number;
  y: number;
  constructor(public x1: number, public y1: number) {
    this.x = x1;
    this.y = y1;
  }
  get first(): number {
    return this.x;
  }
  get second(): number {
    return this.y;
  }
  swap(): Pair {
    return new Pair(this.y, this.x);
  }
  toArray(): number[] {
    return [this.x, this.y];
  }
}
function firstCompleteIndex(arr: number[], mat: number[][]): number {
  const NOT_FOUND = -1;
  const m = mat.length,
    n = mat[0].length;
  const map = new Map<number, Pair>();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; ++j) {
      const val = mat[i][j];
      map.set(val, new Pair(i, j));
    }
  }
  const col = new Array<number>(n).fill(0);
  const row = new Array<number>(m).fill(0);
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
