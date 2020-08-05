/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

? Current thought process is to loop through array with a counter to keep track of length of remaining array that hasn't been check if there are 0's. Next is to remove the 0 at the point of the array I am at if there is a 0 and just add a 0 to the end.
? 2020.8.4 Ran into the issue of index skipping when running into a 0
? New approach is to count the zero then add to it after using a counter
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      counter++;
    }
    console.log(nums);
  }
  nums = nums.filter(function (value, index, arr) {
    return value !== 0;
  });
  console.log(counter);
  while (counter != 0) {
    counter--;
    nums.push(0);
  }
  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0, 0, 1]);
