/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = (root, k) => {
	const res = levelOrder(root);
	if (res.length < k) return -1;
	res.sort((a, b) => b - a);
	return res[k - 1];
};
var levelOrder = (root) => {
	let res = [];
	const queue = [root];
	while (queue.length) {
		const level = [];
		const len = queue.length;
		for (let i = 0; i < len; i++) {
			const node = queue.shift();
			level.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		res.push(level);
	}
	res = res.map((item) => item.reduce((a, b) => a + b, 0));
	return res;
};
