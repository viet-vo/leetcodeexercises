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
  for (i = 0; i !== n; i++) {
    if (n % 3 === 0 && n % 5 === 0) {
      arr.push("FizzBuzz" + i);
    } else if (n % 3 === 0) {
      arr.push("Fizz" + i);
    } else if (n % 5 === 0) {
      arr.push("Buzz" + i);
    } else {
      arr.push("" + n);
    }
  }
  return arr;
};
