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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let queue = [root];
    while(queue.length) {
        root = queue.shift();
        if(root.right) queue.push(root.right);
        if(root.left) queue.push(root.left);
    }
    return root.val;
};
