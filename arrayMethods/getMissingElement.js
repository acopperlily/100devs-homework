// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

/* PREP
  Parameter: an array of all unique integers from 0 to 9 with one missing
  Returns: the missing number
  Examples:
    [0, 5, 1, 3, 2, 9, 7, 6, 4] returns 8
  Pseudocode:
    take math approach
    get sum of digits 1 through 9
    use reduce method on array
    subtract the sum of array from sum of all digits
*/

// function getMissingElement(arr) {
//   let n = arr.length;
//   let total = 0;
//   while (n > 0) total += n--;
//   let sum = arr.reduce((acc, c) => acc + c, 0);
//   return total - sum;
// }

// Magic Number Wildin'
const getMissingElement = arr => 45 - arr.reduce((acc, c) => acc + c, 0);

// Test cases
console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); // 8
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])); // 3