/**
 * @param {number} n
 * @return {string[]}
 */
//? Should be easy solution. Have resolved FizzBuzz before.
//? Embarressingly forgot how module works and the logic to check "if divisible by"

//? After realizing the for loop needed to iterate through the whole array, Array.forEach implementation should work.
//? Quick realization that it's a number that constructs an array is passed into function. Will reverse the changes and reapproach
//! Realized that n check was not checking for the correct value.

var fizzBuzz = function (n) {
  arr = [];
  for (i = 0; i !== n;) {
    i++;
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push("" + i);
    }
  }
  return arr;
};
