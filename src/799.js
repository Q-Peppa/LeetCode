/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
  const glasses = Array.from({ length: query_row + 1 }, () =>
    Array(query_row + 1).fill(0),
  );
  glasses[0][0] = poured;
  for (let row = 0; row < query_row; row++) {
    for (let glass = 0; glass <= row; glass++) {
      const overflow = Math.max(0, glasses[row][glass] - 1);
      if (overflow > 0) {
        glasses[row + 1][glass] += overflow / 2;
        glasses[row + 1][glass + 1] += overflow / 2;
      }
    }
  }
  return Math.min(1, glasses[query_row][query_glass]);
};
