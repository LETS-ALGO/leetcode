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
class Solution {
    public ListNode sortList(ListNode head) {
        if(head == null || head.next == null) return head;

        ListNode mid = getMid(head);
        ListNode left = sortList(head);
        ListNode right = sortList(mid);

        return merge(left, right);
    }
    public ListNode merge(ListNode left, ListNode right){
        /*
            left, right, tail, head 모두 포인터 처럼 생각하자 !!!
        */
        ListNode head = new ListNode(); // head = null
        ListNode tail = head;  // tail = null
        while(left != null && right != null){
            if(left.val < right.val) {
                // 1 3
                tail.next = left; // null.next = 1
                left = left.next; // left = 3 => (tail->(left)1->(left.next)3
                tail = tail.next; // tail다음칸 -> 1(tail) -> 3 (left)
            }else{
                tail.next = right;
                right = right.next;
                tail = tail.next;
            }
        }
        tail.next = (left != null) ? left : right;
        return head.next;
    }

    public ListNode getMid(ListNode head){
        ListNode node = null;
        while(head!=null && head.next!=null){
            node = (node == null)? head : node.next;
            head = head.next.next; // node 는 mid의 이전 노드이다
        }
        ListNode mid = node.next;
        node.next = null;
        return mid;
    }

}