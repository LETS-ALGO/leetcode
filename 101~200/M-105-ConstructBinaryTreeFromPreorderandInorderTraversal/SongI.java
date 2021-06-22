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
    /* preorder
        root->left->right
        inorder
        left->root->right
    */
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if(preorder.length==0) return null;
        TreeNode root = new TreeNode(preorder[0]);

        // 3 / 9 2 4 / 20 15 7  // preorder
        // root/ left / right
        // 2 4 9 / 3 / 15 20 7 // inorder
        // left / root / right

        int inorderVal = 0;
        int preorderVal = 0;

        // inorder - left right 찾기
        for(int i=0; i<inorder.length; i++){
            if(inorder[i] == preorder[0]){
                inorderVal = i;
                preorderVal = i;
                // 9 = left의 마지막
                break;
            }
        }

        int []leftIn = Arrays.copyOfRange(inorder, 0, inorderVal);
        int []rightIn = Arrays.copyOfRange(inorder, inorderVal+1, inorder.length);
        int []leftPre = Arrays.copyOfRange(preorder, 1, preorderVal+1);
        int []rightPre = Arrays.copyOfRange(preorder, preorderVal+1, preorder.length);

        TreeNode left = buildTree(leftPre, leftIn);
        TreeNode right = buildTree(rightPre, rightIn);
        root.left = left;
        root.right = right;
        return root;
    }
}