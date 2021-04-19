function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
//루트 노드 보다 작은 값은 왼쪽 하위 트리에 존재하고
//루트 노드 보다 큰 값은 오른쪽 하위 트리에 존재함
//이진 탐색 트리에서 left -> root -> right 중위 순회를 해서 오름차순으로 정렬된 값을 반환한다.
// var kthSmallest = function (root, k) {
//   let sortedArray = [];
//   function dfs(node) {
//     if (!node) return;

//     dfs(node.left);
//     sortedArray.push(node.val);
//     dfs(node.right);
//   }

//   dfs(root);
//   return sortedArray[k-1];
// };

//left -> root -> right 순으로 탐색한다. 
//노드를 탐색할 때 마다 k 를 감소 시킨다. 
// k가 0이면 현재 노드를 반환한다. 
var kthSmallest = function (root, k) {
  let target = null;
  function traverse(node) {
    if (!node || target) return;

    traverse(node.left);
    k--;
    if (k === 0) target = node.val;
    traverse(node.right);
  }

  traverse(root, k);
  return target;
};

const left = new TreeNode(1, null, 2);
const right = new TreeNode(4, null, null);
const tree = new TreeNode(3, left, right);
const k = 1;
console.log(kthSmallest(tree, k));
