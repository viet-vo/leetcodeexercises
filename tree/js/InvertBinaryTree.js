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
//? Need to figure out to how to return to original root.

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
runs = 0;
var invertTree = function (root) {
  console.log(runs);
  runs = runs + 1;

  if (root.left !== null) {
    console.log(root);
    root.left.val = root.left.val ^ root.right.val;
    root.right.val = root.left.val ^ root.right.val;
    root.left.val = root.left.val ^ root.right.val;
    console.log(root);
    console.log(root.root);
    invertTree(root.left);
  } else if (root.right !== null) {
    console.log(root);
    root.left.val = root.left.val ^ root.right.val;
    root.right.val = root.left.val ^ root.right.val;
    root.left.val = root.left.val ^ root.right.val;
    console.log(root);
    invertTree(root.right);
  }
};
