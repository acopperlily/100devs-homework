// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

/* PREP
  Parameters: an array of integers and one integer
  Returns: an array of numbers divisible by divisor
  Examples:
    [1, 2, 3, 4, 5, 6], 2 returns [2, 4, 6]
    [1, 3, 5], 2 returns []
  Pseudocode:
    use filter method on array
    use modulo to check if nums are evenly divisible by divisor
*/

// function divisibleBy(arr, divisor) {
//   return arr.filter(n => n % divisor === 0);
// }

const divisibleBy = (arr, div) => arr.filter(n => n % div === 0);

// Test cases
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2)); // [2, 4, 6]
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3)); // [3, 6]
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4)); // [0, 4]
console.log(divisibleBy([0], 4)); // [0]
console.log(divisibleBy([1, 3, 5], 2)); // []