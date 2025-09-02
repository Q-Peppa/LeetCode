const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  if (head?.next === null) return head; // one node
  const arr = [];
  let chead = head;
  while (chead.next) {
    const f1 = chead;
    const f2 = chead.next;
    const curGcd = gcd(f1.val, f2.val);
    const n = f1.next;
    f1.next = new ListNode(curGcd);
    f1.next.next = n;
    chead = f1.next.next;
  }
  return head;
};
