/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

? Originally, I had the idea of moving through the array with a loop and key to check if the value of the key index starting at -1 was a 9. For some reason I tried brute forcing the exercise with type manipulation. I clearly ran into the issue that would have been handled if I had gone with the former. If the integer is too large after parsing, javascript at least, incorrectly interprets the number. 
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  console.log(seperateString(combineArray(digits) + 1 + ""));
};
var combineArray = function (arr) {
  console.log(parseInt(arr.join("")));
  return parseInt(arr.join(""));
};
var seperateString = function (str) {
  return str.split("");
};

// plusOne([1, 2, 3]);
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
