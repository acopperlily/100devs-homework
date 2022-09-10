// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

/* PREP
  Parameters: an array of positive integers
  Returns: an array containing the second largest number and the largest number
  Examples:
    [1, 2, 10, 8] returns [8, 10]
    [1, 5, 87, 45, 8, 8] returns [45, 87]
  Pseudocode:
    Sort array from smallest number to largest
    Return last two elements of array
*/

// function twoOldestAges(ages) {
//   ages.sort((a, b) => a - b);
//   return ages.slice(-2);
// }

// Wildin'
const twoOldestAges = arr => arr.sort((a, b) => a - b).slice(-2);

// Test cases
console.log(twoOldestAges([1, 2, 10, 8]));
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]));