// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// function getAverage(marks) {
//   let sum = marks.reduce((acc, c) => acc + c, 0);
//   return Math.floor(sum / marks.length);
// }

// Wildin'
const getAverage = marks => Math.floor(marks.reduce((acc, c) => acc + c, 0) / marks.length);

// Test cases
console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);