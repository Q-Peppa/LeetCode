var reverseKGroup = function (head, k) {
  let dummy = new ListNode(-1, head),
    prev = dummy;
  while (1) {
    let check = prev;
    for (let i = 0; i < k; i++) {
      check = check.next;
      if (!check) return dummy.next;
    }
    let curr = prev.next,
      next;
    for (let i = 0; i < k - 1; i++) {
      next = curr.next;
      curr.next = next.next;
      next.next = prev.next;
      prev.next = next;
    }
    prev = curr;
  }
};
