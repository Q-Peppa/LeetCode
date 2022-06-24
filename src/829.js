//https://leetcode.cn/problems/find-largest-value-in-each-tree-row/
var largestValues = function (root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        let max = -Infinity;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            max = Math.max(max, node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(max);
    }
    return res;
}