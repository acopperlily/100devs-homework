// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

// The array is unsorted.

// An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

// You should return the duplicate value as a single integer.

/* PREP
  Parameters: an array of unique unsorted integers starting from 1 with one duplicate number
  Returns: the duplicate number
  Examples:
    [1, 2, 2, 3] returns 2
    [3, 2, 5, 1, 3, 4] returns 3
  Pseudocode:
    obtain sum of numbers 1 through length of array - 1
    use reduce method to subtract previous sum from sum of array
*/

function findDup(arr) {
  let sum = arr.length - 1;
  let i = sum;
  while (i > 0) sum += --i;
  return arr.reduce((acc, c) => acc + c, -sum);
}

// Wildin' (lol too much)
// const findDup = arr => arr.reduce((acc, c) => acc + c, Array.from({length: arr.length - 1}, (_, i) => i + 1).reduce((acc, c) => acc - c, 0));

// Test cases
console.log(findDup([1, 2, 2, 3])); // 2
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6])); // 5
console.log(findDup([3, 2, 5, 1, 3, 4])); // 3