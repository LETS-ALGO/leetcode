/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
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
    public TreeNode sortedListToBST(ListNode head) {
        if(head == null) return null;
        return toBST(head, null);
    }

    public TreeNode toBST(ListNode head, ListNode tail){
        ListNode slow = head; // 뒤에 있는것
        ListNode fast = head; // 앞에 있는 것
        if(head == tail) return null;
        // fast.next!=tail 일 때까지
        while (fast!= tail && fast.next!=tail){
            fast = fast.next.next; // 완전 끝(9)
            slow = slow.next; // 0
        }
        TreeNode node = new TreeNode(slow.val); // 뒤에 있는 것
        node.left = toBST(head, slow); // left의 head는 처음 head에서 slow 까지
        node.right = toBST(slow.next, tail); // right의 head는 slow.next부터 tail 까지
        return node;
    }
}