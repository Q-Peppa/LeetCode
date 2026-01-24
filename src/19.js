// Helper for testing
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;

  // Move fast n + 1 steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both until fast reaches end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the nth node from end
  slow.next = slow.next.next;

  return dummy.next;
};

// Time Complexity: O(N)
// Space Complexity: O(1)

const head1 = arrayToList([1, 2, 3, 4, 5]);
console.log(listToArray(removeNthFromEnd(head1, 2)), 'Expected: [1,2,3,5]');

const head2 = arrayToList([1]);
console.log(listToArray(removeNthFromEnd(head2, 1)), 'Expected: []');

const head3 = arrayToList([1, 2]);
console.log(listToArray(removeNthFromEnd(head3, 1)), 'Expected: [1]');
