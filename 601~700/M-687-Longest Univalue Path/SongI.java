/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int answer;
    public int longestUnivaluePath(TreeNode root) {
        answer = 0;

        solve(root);
        return answer;
    }

    public int solve(TreeNode root){
        if(root == null) return 0;
        int left = solve(root.left);
        int right = solve(root.right);

        int l=0, r=0;
        if(root.left!=null && root.left.val == root.val){
            l += left+1;
        }
        if(root.right!=null && root.right.val == root.val){
            r += right+1;
        }
        answer = Math.max(answer, l+r);
        return Math.max(l, r);
    }
}