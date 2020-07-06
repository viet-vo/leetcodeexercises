/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/
// ? My initial approach on this exercise is to sort these two arrays into hash maps seperately with the number as a key and iteriate the value by 1 for each instance. The sort would take take O(2n) or O(n) with a space complexity of 0(2n) or O(n). I would then loop over 1 hash map's keys to compare if they exist in the other. I would also have to check if their values are equal and push the key value many as times. (THE FOLLOWING THEORY WOULD NOT WORK) In the instance of different values, instead of trying to find the larger of the two, I can use the absolute value of their difference to discern. In the instance of different values, I would have to find the lesser value of the two and push the key the lesser value amount of times.

// ? For the issue of adding numbers to the return array, I believe I should should push the value as an array into the object so that I can join them easily.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  map1 = {};
  for (let i = 0; i < nums1.length; i++) {
    map1[nums1[i]] === undefined ? (map1[nums1[i]] = 1) : (map1[nums1[i]] += 1);
  }
  map2 = {};
  for (let j = 0; j < nums2.length; j++) {
    map2[nums2[j]] === undefined ? (map2[nums2[j]] = 1) : (map2[nums2[j]] += 1);
  }
  console.log(map1, map2);
  arr = [];
  //   for (key in map1) {
  //       if(map1[key] && map2[key]) {
  //           arr.push()
  //       }
  //   }
  arr.push("test", 2);
  console.log(arr);
};

intersect([1, 2, 2, 1], [2, 2]);
