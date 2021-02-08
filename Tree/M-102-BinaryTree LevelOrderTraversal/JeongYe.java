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
    public Map<Integer, ArrayList> levels = new HashMap<>(); // 트리 레벨, 해당 레벨의 노드 값 목록 저장
    public int depth = 0; //트리 레벨

    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> answer = new ArrayList<>();

        if(root == null) return new ArrayList<>();

        traverse(root);

        for(int depth : levels.keySet()) {
            answer.add(levels.get(depth));
        }

        return answer;

    }

    public int traverse(TreeNode node) {
        depth++; 
        if(node == null) return depth--;

        ArrayList<Integer> levelList = levels.get(depth); //현재 트리 레벨의 노드 목록을 가져온다.
        if(levelList == null) levelList = new ArrayList<>();

        levelList.add(node.val); //현재 레벨의 노드 목록에 추가한다.
        levels.put(depth, levelList);

        traverse(node.left);
        traverse(node.right);

        return depth--;
    }
}