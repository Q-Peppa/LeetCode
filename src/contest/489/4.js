var maxXor = function (nums, k) {
  const n = nums.length;
  const MAX_NODES = 1250000;
  const next = new Int32Array(MAX_NODES * 2);
  const count = new Int32Array(MAX_NODES);

  let nodesCount = 1;
  const update = (val, delta) => {
    let node = 0;
    for (let i = 30; i >= 0; i--) {
      const bit = (val >>> i) & 1; // 使用无符号右移保证 32 位一致性
      const idx = (node << 1) | bit; // 优化：用位移代替 node * 2 + bit
      if (next[idx] === 0) {
        next[idx] = nodesCount++;
      }
      node = next[idx];
      count[node] += delta;
    }
  };

  const query = (val) => {
    let node = 0;
    let res = 0;
    for (let i = 30; i >= 0; i--) {
      const bit = (val >>> i) & 1;
      const target = bit ^ 1;
      const targetIdx = (node << 1) | target;

      const targetNode = next[targetIdx];
      if (targetNode !== 0 && count[targetNode] > 0) {
        res |= 1 << i;
        node = targetNode;
      } else {
        node = next[(node << 1) | bit];
        if (node === 0) return res; // 容错处理
      }
    }
    return res;
  };

  const qMax = new Int32Array(n);
  const qMin = new Int32Array(n);
  let hMax = 0,
    tMax = 0,
    hMin = 0,
    tMin = 0;
  const prefixXors = new Int32Array(n + 1);
  for (let i = 0; i < n; i++) prefixXors[i + 1] = prefixXors[i] ^ nums[i];

  let maxResult = 0;
  let left = 0;
  update(0, 1);

  for (let r = 0; r < n; r++) {
    const val = nums[r];
    while (tMax > hMax && nums[qMax[tMax - 1]] <= val) tMax--;
    qMax[tMax++] = r;
    while (tMin > hMin && nums[qMin[tMin - 1]] >= val) tMin--;
    qMin[tMin++] = r;

    while (nums[qMax[hMax]] - nums[qMin[hMin]] > k) {
      update(prefixXors[left], -1);
      left++;
      if (qMax[hMax] < left) hMax++;
      if (qMin[hMin] < left) hMin++;
    }

    maxResult = Math.max(maxResult, query(prefixXors[r + 1]));
    update(prefixXors[r + 1], 1);
  }

  return maxResult;
};
