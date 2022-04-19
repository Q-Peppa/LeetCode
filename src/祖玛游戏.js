const _ = require('lodash');
/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
  let ans = 6,
    max = hand.length;
  const vis = new Set();
  let dfs = (b, h) => {
    if (b.length === 0) {
      ans = _.min([ans, max - h.length]);
      return;
    }
    if (vis.has(b)) {
      return;
    }
    vis.add(b);
    for (let i = 0; i < b.length; i++) {
      if (b[i] === b[i + 1] && b[i] === b[i + 2]) {
        let j = i + 3;
        while (b[j] === b[i]) {
          j++;
        }
        const newB = b.substring(0, i) + b.substring(j);
        return dfs(newB, h);
      }
    }
    for (let i = 0; i < h.length; i++) {
      for (let j = 0; j < b.length; j++) {
        const newB = b.substring(0, j) + h[i] + b.substring(j);
        const nh = h.substring(0, i) + h.substring(i + 1);
        dfs(newB, nh);
      }
    }
  };

  dfs(board, hand);
  return ans === 6 ? -1 : ans;
};
console.log(findMinStep('RRYGGYYRRYGGYYRR', 'GGBBB'));
