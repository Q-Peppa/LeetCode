/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function (land) {
  const ans = [];
  const dir = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const render = (i, j) => {
    let size = 1;
    const q = [[i, j]];
    while (q.length) {
      const [x, y] = q.shift();
      land[x][y] = 1;
      for (let i = 0; i < dir.length; i++) {
        const [dx, dy] = dir[i];
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 &&
          nx < land.length &&
          ny >= 0 &&
          ny < land[0].length &&
          land[nx][ny] === 0
        ) {
          q.push([nx, ny]);
          land[nx][ny] = 1;
          size++;
        }
      }
    }
    return size;
  };
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      if (land[i][j] === 0) {
        const size = render(i, j);
        ans.push(size);
      }
    }
  }
  return ans.sort((a, b) => a - b);
};

console.log(
  pondSizes([
    [0, 2, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1],
  ]),
); // [1,2,4]

const __ = 20;
console.log(__dirname);
