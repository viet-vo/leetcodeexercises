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
//! 3rd Night working on, will watch recursion coding example and attempt after

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
runs = 0;
var invertTree = function (root) {
  console.log(runs);
  runs = runs + 1;

  if (root != null) {
// This is where we cycle through both branches. Initially, I had thought about approaching recursion this way but logically I could not follow how I would run through all the branches.
//todo I need to process the process of this method to fully understand. My previous todo comment would not support the method of recursion succinctly.
// After commenting above, following the function below would traverse the branches left-most first until null, then check for right-branch, and so on. Then, it will proceed to switch the branches.
// This method would make sure all the inverses are followed up from all the extremity branches proceeding with the root most branch.
//todo Look up why would you need to inverse a binary tree.
    invertTree(root.left);
    invertTree(root.right);
// This is where we switch branches
  };
  return root;
};
