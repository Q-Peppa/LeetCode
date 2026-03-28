const swapPairs = (head) => {
	if (head === null || head.next === null) return head;
	const { next } = head;
	head.next = swapPairs(next.next);
	next.next = head;
	return next;
};
