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
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let count = 0;

  function dfs(rootVal, current) {
    if (!current) return 0;

    //왼쪽, 오른쪽 노드 자식을 각각 탐색하면서
    //동일한 경로로 이루어진 노드의 개수를 구한다.
    const leftCount = dfs(current.val, current.left);
    const rightCount = dfs(current.val, current.right);

    //경로의 최대 값을 갱신한다.
    count = Math.max(count, leftCount + rightCount);

    //루트 값이랑 현재 노드 값이 동일하다면 경로를 +1 연장
    //일치하지 않는다면 경로를 0으로 초기화 한다.
    return rootVal === current.val ? Math.max(leftCount, rightCount) + 1 : 0;
  }

  if (root) dfs(root.val, root);

  return count;
};
