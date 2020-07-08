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

? In the end, I had to work through a couple of unforseen edge cases that I had to rework the base of how I navigated the array. Taking a look at the quickest solution, you would recursively call the the function and add another parameter
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    index = digits.length - 1
    while (index >= 0) {
        if (digits[index] === 9 && index === 0) {
            digits[index] = 0;
            digits.unshift(1);
            return digits
        } else if (digits[index] === 9) {
            digits[index] = 0;
        } else {
            digits[index] += 1;
            return digits
        }
        index -= 1;
    }
};

plusOne([9, 9]);
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
