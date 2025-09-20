/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let res = new ListNode(0);
  let ans = res;
  ans.next = res;
  let add = 0;
  while (l1 || l2 || add > 0) {
    let temp = add;
    if (l1) {
      temp += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      temp += l2.val;
      l2 = l2.next;
    }

    add = temp > 9 ? 1 : 0;
    temp %= 10;
    res.next = new ListNode(temp);
    res = res.next;
  }
  return ans.next;
};
