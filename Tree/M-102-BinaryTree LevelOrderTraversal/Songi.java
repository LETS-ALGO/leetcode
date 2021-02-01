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

    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> list = new ArrayList<>();

        Queue<TreeNode> q = new LinkedList<>();
        Queue<Integer> level = new LinkedList<>();
        q.add(root);
        level.add(0);

        List<Integer> levelList = new LinkedList<>();

        while(!q.isEmpty()){
            TreeNode now = q.poll();
            Integer idx = level.poll();
            if(now == null) continue;

            if(list.size()<=idx) list.add(new LinkedList<>());
            levelList = list.get(idx);
            levelList.add(now.val);
            list.set(idx, levelList);
            // System.out.println(list.get(idx));

            if(now.left!=null) {
                q.add(now.left);
                level.add(idx+1);
            }
            if(now.right!=null) {
                q.add(now.right);
                level.add(idx+1);
            }
        }
        return list;
    }

}