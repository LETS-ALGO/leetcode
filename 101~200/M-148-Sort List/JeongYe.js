function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;

  let fast = head;
  let slow = head;

  //중간 지점 탐색
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let mid = slow.next;
  slow.next = null;

  return merge(sortList(head), sortList(mid));
};

function merge(left, right) {
  //빈 노드 생성
  let dummyHead = new ListNode(null, null);
  let pointer = dummyHead;
  

  while (left && right) {
    pointer.next = left.val < right.val ? left : right;
    pointer = pointer.next;

    //오른쪽 값이 더 크다면 왼쪽 포인터를 다음으로 한칸 이동
    if (left.val < right.val) {
      left = left.next;
    } else {
      right = right.next;
    }

    pointer.next = left || right;
  }

  return dummyHead.next;
}
