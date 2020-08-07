/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
! 2020.08.06
? Having done this one before, I know off the bat that there is a brute force method checking the sums of every possible pair of indexes. The issue with this is that the time complexity would be O(n^2).
? The next best viable solution is to find the difference between each index of the array and then search the array for that difference.
? To expand on the previous solution, you can first create a hashmap of the array. Then you would loop through the array only once to see if that difference exist in the hashmap at all.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  console.log(nums + " is the list of addends for the sum: " + target);
  hash = new Map();
  for (i in nums) {
    hash[nums[i]] = i;
  }
  for (i in nums) {
    complementDifference = target - nums[i];
    if (hash[complementDifference])
      console.log([parseInt(i), parseInt(hash[complementDifference])]);
    return [nums[i], complementDifference];
  }
  //TODO Edge case if the sum is two of the same addends (this might not need to be accounted for if it's guarenteed that the correct difference is in the array)
  console.log(hash);
};

twoSum([2, 7, 11, 15], 9);
