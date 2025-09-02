/**
 * @link https://space.bilibili.com/3493291582556482
 * @description 1054. 距离相等的条形码 , 请你重新排列这些条形码，使其中任意两个相邻的条形码不能相等. 简单来说就是数组不能有连续的相同的元素, 题目保证答案存在
 * @example
 * - rearrangeBarcodes([1,1,1,2,2,2]) => [2,1,2,1,2,1]
 * - rearrangeBarcodes([1,1,1,1,2,2,3,3]) => [1,3,1,3,1,2,1,2]
 */
var rearrangeBarcodes = function (barcodes) {
  if (barcodes.length === 1) return [...barcodes];
  let ans = [];
  const q = new PriorityQueue({
    compare: (a, b) => b.val - a.val,
  });
  const count = barcodes.reduce((p, c) => {
    p[c] = (p[c] ?? 0) + 1;
    return p;
  }, {});
  //   console.log(count)
  for (const ele in count) {
    q.enqueue({ key: ele, val: count[ele] });
  }
  // console.log('q',  q)
  let rest = undefined;
  const ok = (i) => {
    while (i < barcodes.length && !q.isEmpty()) {
      const top = q.dequeue();
      //   console.log('top', top);
      // if(top)
      while (top.val && i < barcodes.length) {
        ans[i] = top.key;
        top.val--;
        i += 2;
      }
      //   console.log('top.after', top);
      if (top.val) {
        rest = { ...top };
      }
    }
  };
  ok(0);
  if (rest) {
    for (let i = 0; i < rest.val; i++) {
      ans[i * 2 + 1] = rest.key;
    }
  }
  ok(rest ? rest.val * 2 + 1 : 1);
  return ans;
};
