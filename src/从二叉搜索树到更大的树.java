/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
	int val = 0;
	public TreeNode bstToGst(TreeNode root) {
		dfs(root);
		return root;

	}
	private void dfs(TreeNode node){
		if(node == null)
			return ;	
		if(node.right!=null){
			dfs(node.right);
		}
		node.val += val;
		val = node.val;
		if(node.left!=null){
			dfs(node.left);
		}
	}
}