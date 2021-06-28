/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  //노드의 인덱스 값을 저장
  let indexMap = {};
  inorder.forEach((val, i) => (indexMap[val] = i));
    
  /**
   * preorder의 첫번째 아이템을 루트로 가져오고, 
   * 루트 기준으로 inorder에서 좌,우 서브 트리를 형성한다.  
   */
  function generateTree(start, end) {
    if (start > end) return null; 
    const root = new TreeNode(preorder.shift());
    root.left = generateTree(start, indexMap[root.val] - 1);
    root.right = generateTree(indexMap[root.val] + 1, end);

    return root;
  }

  return generateTree(0, inorder.length - 1);
};
