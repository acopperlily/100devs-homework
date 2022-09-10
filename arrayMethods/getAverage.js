// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

/* PREP
  Parameters: an array of positive integers
  Returns: average of array rounded down to nearest integer
  Examples:
    [2, 2, 2, 2] returns 2
    [1, 1, 1, 1, 1, 1, 1, 2] returns 1
  Pseudocode:
    find total by adding all integers in array
    divide total by number of integers in array
    use Math.floor to cut off decimal value from integer
*/

// function getAverage(marks) {
//   const total = marks.reduce((acc, c) => acc + c, 0);
//   return Math.floor(total / marks.length);
// }

// Wildin'
const getAverage = marks => Math.floor(marks.reduce((acc, c) => acc + c, 0) / marks.length);

// Test cases
console.log(getAverage([2, 2, 2, 2])); // 2
console.log(getAverage([1, 2, 3, 4, 5])); // 3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); // 1