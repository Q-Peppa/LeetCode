var replaceValueInTree = (root) => {
	root.val = 0;
	let q = [root];
	while (q.length) {
		const temp = q;
		q = [];
		let nextSum = 0;
		for (const k of temp) {
			if (k.left) {
				q.push(k.left);
				nextSum += k.left.val;
			}
			if (k.right) {
				q.push(k.right);
				nextSum += k.right.val;
			}
		}
		for (const k of temp) {
			const cSum =
				(k.left?.val ? k.left.val : 0) + (k.right?.val ? k.right.val : 0);
			if (k.left) {
				k.left.val = nextSum - cSum;
			}
			if (k.right) {
				k.right.val = nextSum - cSum;
			}
		}
	}
	return root;
};
