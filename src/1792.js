/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = (classes, extraStudents) => {
  const q = new PriorityQueue((a, b) => {
    return (
      (b[1] + 1) * b[1] * (a[1] - a[0]) < (a[1] + 1) * a[1] * (b[1] - b[0])
    );
  });

  classes.some((item) => {
    q.push(item);
  });

  while (extraStudents) {
    const it = q.dequeue();
    it[0] += 1;
    it[1] += 1;
    q.push(it);
    extraStudents--;
  }
  const s = q.toArray();
  let ret = 0;
  for (const bid of q) {
    ret += bid[0] / bid[1];
  }
  return ret / classes.length;
};
