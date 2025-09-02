/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const reverserList = (head) => {
	if (!head) return head;
	let cur = head;
	let pre = null;
	while (cur) {
		let temp = cur.next;
		cur.next = pre;
		pre = cur;
		cur = temp;
	}
	return pre;
};
const middleList = (head) => {
	let slow, fast;
	slow = fast = head;
	while (fast) {
		fast = fast.next?.next;
		slow = slow.next;
	}
	return slow;
};
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

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	if (!head?.next) return head;

	const mid = middleList(head);
	let br = head;
	while (br.next != mid) {
		br = br.next;
	}
	br.next = null;
	console.log("head", head);
	const tail = reverserList(mid);
	console.log("tail", tail);
	return mergeList(head, tail);
};
