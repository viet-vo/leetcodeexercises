/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//? First idea is that use a treeLayer counter that determines how many nodes to reverse the section of the array of.
//? After viewing the video example in the solution video section, 2 solutions are explained both with O(n) for time and space complexity. Those 2 are recursive and interive (with fifo queue).
//? I will work on a recursive method.
//todo Try a 2 function recursion method to not run into null errors.

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
runs = 0;
var invertTree = function (root) {
  console.log(runs);
  runs = runs + 1;

  if ((root = null)) {
    if (root.left !== null) {
      console.log(root);
      root.left.val = root.left.val ^ root.right.val;
      root.right.val = root.left.val ^ root.right.val;
      root.left.val = root.left.val ^ root.right.val;
      console.log(root);
      invertTree(root.left);
    } else if (root.right !== null) {
      console.log(root);
      root.left.val = root.left.val ^ root.right.val;
      root.right.val = root.left.val ^ root.right.val;
      root.left.val = root.left.val ^ root.right.val;
      console.log(root);
      invertTree(root.right);
    } else {
      return;
    }
    return;
  }

  return root;
};
