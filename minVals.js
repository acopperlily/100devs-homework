// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

/* PREP
  Parameters: array of unique numbers, string 'value' or 'index'
  Returns: smallest number or index according to second parameter
  Examples:
    [1, 2, 3], 'value' returns 1
    [1, 2, 3], 'index' returns 0
  Pseudocode:
    use Math.min method to find smallest number in array
    if 'value', return that number
    if 'index', use indexOf that value and return it
*/

function min(arr, toReturn) {
  const smallest = Math.min(...arr);
  return toReturn === 'value' ? smallest : arr.indexOf(smallest);
}

// Test cases
const arr = [1, 2, 3, 4, 5];
console.log(min(arr, 'value')); // 1
console.log(min(arr, 'index')); // 0