// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

/* PREP
  Parameters: two arrays containing integers
  Returns: total sum of elements of both arrays
  Examples:
    [1, 2, 3], [4, 5, 6] returns 21
    [0, 0], [-4, -5] returns -9
  Pseudocode:
    concatenate arrays
    use reduce method to find sum
*/

// function arrayPlusArray(arr1, arr2) {
//   const arr = arr1.concat(arr2);
//   return arr.reduce((acc, c) => acc + c, 0);
// }

// Wildin'
const arrayPlusArray = (a1, a2) => a1.concat(a2).reduce((acc, c) => acc + c, 0);

// Test cases
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); // 15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); // 2100