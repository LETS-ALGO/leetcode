/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {

  //전체 노드 개수 구하기
  const nodeCount = countNodes(head);

  
  function traverse(n) {
    if (n <= 0) return null;

    const left = traverse(Math.floor(n / 2));
    const root = new TreeNode(head.val);
    root.left = left; //트리 왼쪽 탐색
    head = head.next; //head 포인터 한개 이동
    root.right = traverse(n - Math.floor(n / 2) - 1); //트리 우측 탐색
    return root;
  }

  return traverse(nodeCount);
};

function countNodes(head) {
  if (!head) return 0;
  return 1 + countNodes(head.next);
}
