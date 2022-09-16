// avaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

/* PREP
  Parameters: an array of numbers
  Returns: an array of only even numbers, an empty array if no even numbers are present
  Examples:
    [2, 4, 5, 6] returns [2, 4, 6]
    [1, 3] returns []
  Pseudocode:
    use the filter method
    use modulus operator for comparison
*/

// function getEvenNumbers(arr) {
//   return arr.filter(n => n % 2 === 0);
// }

const getEvenNumbers = arr => arr.filter(n => n % 2 === 0);

// Test cases
console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
console.log(getEvenNumbers([1, 2]));
console.log(getEvenNumbers([12, 14, 15]));
console.log(getEvenNumbers([13, 15]));
console.log(getEvenNumbers([1, 3, 9]));