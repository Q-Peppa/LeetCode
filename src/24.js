var swapPairs = function (head) {
  if (head === null || head.next === null) return head;
  var { next } = head;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};
