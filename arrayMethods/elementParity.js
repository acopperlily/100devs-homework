// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

/* PREP
  Parameters: an array of integers
  Returns: the integer that has no matching negative or positive
  Examples:
    [1, -1, 2, -2, 3] returns 3
    [1, -1, 2, -2, 3, 3] returns 3
  Pseudocode:
    convert array to set to get rid of dupicates
    convert set to array
    use reduce method to isolate integer because matching positive integers with their corresponding negatives zero out
*/

// function elementParity(arr) {
//   let arrSet = [...new Set(arr)];
//   return arrSet.reduce((acc, c) => acc + c, 0);
// }

// Wildin'
const elementParity = arr => [...new Set(arr)].reduce((acc, c) => acc + c, 0);

// Test cases
console.log(elementParity([1, -1, 2, -2, 3])); // 3
console.log(elementParity([-3, 1, 2, 3, -1, -4, -2])); // -4
console.log(elementParity([1, -1, 2, -2, 3, 3])); // 3
console.log(elementParity([-110, 110, -38, -38, -62, 62, -38, -38, -38])); // -38
console.log(elementParity([-9, -105, -9, -9, -9, -9, 105])); // -9