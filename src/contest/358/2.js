var addTwoNumbers = function (l1, l2) {
  const reverseList = function (head) {
    if (!head || !head.next) return head;
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  };
  let h1 = reverseList(l1),
    h2 = reverseList(l2),
    carry = 0;
  const head = new ListNode(0);
  let node = head;
  while (h1 || h2 || carry) {
    const val = (h1?.val || 0) + (h2?.val || 0) + carry;
    node.next = new ListNode(val % 10);
    node = node.next;
    h1 && (h1 = h1.next);
    h2 && (h2 = h2.next);
    carry = Math.floor(val / 10);
  }
  return reverseList(head.next);
};

/**
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? 0 : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
  return addTwoNumbers(head, structuredClone(head));
};

const ArrayToList = (arr) => {
  let head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
};
const LinkedListToArray = (head) => {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
};
const ans = doubleIt(ArrayToList([4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(LinkedListToArray(ans));
