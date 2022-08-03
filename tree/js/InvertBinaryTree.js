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
//? The logic of the the recursive function should work, but I need to understand how to work with the runtime error a branch is null.
//! Upon research, the term DPS stands out when researching the solution.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//! FOUND SOLUTION
//todo Need to process the checks and understand data structure of binary tree before resolving.
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 runs = 0;
 var invertTree = function (root) {
   console.log(runs);
   runs = runs + 1;
 
   if (root !== null) {
     console.log(root);
     // This is where we cycle through both branches. Initially, I had thought about approaching recursion this way but logically I could not follow how I would run through all the branches.
     invertTree(root.left);
     invertTree(root.right);
     //todo I need to process the process of this method to fully understand. My previous todo comment would not support the method of recursion succinctly.
     // After commenting above, following the function below would traverse the branches left-most first until null, then check for right-branch, and so on. Then, it will proceed to switch the branches.
     // This method would make sure all the inverses are followed up from all the extremity branches proceeding with the root most branch.
     //todo Look up why would you need to inverse a binary tree.
 
     // This is where we switch branches
     temp = root.left;
     root.left = root.right;
     root.right = temp;
     // I used a bitwise XOR operator method. I initially wanted to use a deconstructing assignment method to swap values but it did not resolve with the data structure of a binary tree in javascript.
     //todo I would like to explore why deconstructing assignment would not work but bitwise XOR operator method would.
     //! Based on testing, bitwise XOR operator method might not be a solution either.
   }
   return root;
 };
 
