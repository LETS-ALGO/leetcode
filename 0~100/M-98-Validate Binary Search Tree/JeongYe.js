/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {Number} minValue 루트의 최소값
 * @param {Number} maxValue 루트의 최대값
 * @return {boolean}
 */
var isValidBST = function (root, minValue, maxValue) {
  if (!root) return true;

  // minValue <= root <= maxValue를 충족하지 않는 경우
  if (root.val <= minValue || maxValue <= root.val) return false;

  /**
   * root기준으로 왼쪽노드 < root , root < 오른쪽노드 조건이 성립하는지 재귀로 확인한다.
   * 왼쪽노드 탐색 : 왼쪽노드는 root 보다 항상 작기 때문에, 최대값이 root로 갱신된다.
   * 오른쪽노드 탐색 : 오른쪽노드는 root 보다 항상 크기 때문에, 최소값이 root로 갱신된다.
   */
  return isValidBST(root.left, minValue, root.val) && isValidBST(root.right, root.val, maxValue);
};
