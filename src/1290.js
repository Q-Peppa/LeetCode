/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  const v = [];
  while (head) {
    v.push(head.val);
    head = head.next;
  }
  let ret = 0,
    len = v.length;
  _.eachRight(v, (e, i) => {
    ret += (1 << (len - i - 1)) * e;
  });

  return ret;
};
