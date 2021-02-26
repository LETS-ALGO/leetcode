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
import java.util.*;
class Solution {
    
    public int kthSmallest(TreeNode root, int k) {
        ArrayList<Integer> list = new ArrayList<>();
        go(root, list);
        // System.out.println(list);
        return list.get(k-1);
    }
    
    //inorder 
    public void go(TreeNode root,ArrayList<Integer> list){
        if(root != null){
            go(root.left, list);
            list.add(root.val);
            go(root.right, list);
        }
        return;
    }
  
}
