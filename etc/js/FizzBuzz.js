/**
 * @param {number} n
 * @return {string[]}
 */
//? Should be easy solution. Have resolved FizzBuzz before.
//? Embarressingly forgot how module works and the logic to check "if divisible by"
let arr = [];
var fizzBuzz = function (n) {
  for (i = 0; i !== n; i++) {
    if (n % 3 === 0 && n % 5 === 0) {
      arr.push("FizzBuzz" + i);
    } else if (n % 3 === 0) {
      arr.push("Fizz" + i);
    } else if (n % 5 === 0) {
      arr.push("Buzz" + i);
    } else {
        arr.push("" + n)
    }
  }
  return arr;
};
