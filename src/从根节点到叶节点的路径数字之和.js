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
var sumNumbers = function (root) {
  if (root === null) return 0
  let sum = 0
  const dfs = (root, currNum) => {
    if (root) {
      if (root.left == null && root.right == null) {
        sum += currNum * 10 + root.val
        return
      }
      currNum = currNum * 10 + root.val
      dfs(root.left, currNum)
      dfs(root.right, currNum)
    }
  }
  dfs(root, 0)
  return sum
}
