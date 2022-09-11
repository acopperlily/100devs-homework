// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

/* PREP
  Parameter: an array of integers
  Returns: an array of even integers in same order
  Examples:
    [0, 1] returns [0]
    [1, 3, 5] returns []
  Pseudocode:
    use filter method
    use modulo to do comparison
*/

// function noOdds(values) {
//   return values.filter(n => n % 2 === 0);
// }

// Refactor
const noOdds = arr => arr.filter(n => n % 2 === 0);

// Test cases
console.log(noOdds([0, 1]));
console.log(noOdds([0, 1, 2, 3]));
console.log(noOdds([1, 3, 5, 7, 9]));
console.log(noOdds([0, 2, 4, 6, 8, 10]));
console.log(noOdds([-1, -3, -5, -7, -9]));
console.log(noOdds([2, 4, 8, 6, 0]));
console.log(noOdds([]));