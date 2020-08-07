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
    return [parseInt(i), parseInt(hash[complementDifference])];
  }
  // // TODO Edge case if the sum is two of the same addends (this might not need to be accounted for if it's guarenteed that the correct difference is in the array)
  // // Now that the correct version of the solution is made, it certainly looks like I will run into the issue of this edge case. A solution might be to somehow look up the keys in reverse (REVERSE THE ARRAY BEFORE LOOPING) or keeping the first index in a variable and removing the first key of the duplicate value
  // TODO The actual edge case that I ran into is if the solution could be solved by two instances of itself but there is only one instance of it in the array. Reversing the array might work but I feel like I would have to actually make sure that the key of the complement is not the index of the current index
  console.log(hash);
};

twoSum([2, 7, 11, 15], 9);
twoSum([1, 2, 1, 3], 2);
twoSum([3, 2, 4], 6);
