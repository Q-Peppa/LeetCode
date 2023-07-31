const mergeList = (l1, l2) => {
  // 交替合并 , 一样长
  let p1 = l1,
    p2 = l2;
  while (p1 && p2) {
    let tmp = p1.next;
    p1.next = p2;
    p1 = p2;
    p2 = tmp;
  }
  return l1;
};
