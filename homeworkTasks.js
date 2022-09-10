// JavaScript.Info Tasks

/* Translate border-left-width to borderLeftWidth
Write the function camelize(str) that changes dash-separated
words like "my-short-string" into camel-cased "myShortString".
*/

/* PREP
  Parameters: string of words separated by dashes
  Returns: camel-cased string with dashes removed
  Examples:
    'background-color' returns 'backgroundColor'
    'list-style-image' returns 'listStyleImage'
  Pseudocode:
    split string into array using '-' as separator
    loop through array, capitalizing every word except the first
    join array into string
*/

// function camelize(str) {
//   const strArr = str.split('-');
//   result = strArr.map((word, i) => i > 0 ? word[0].toUpperCase() + word.slice(1) : word);
//   return result.join('');
// }

// Wildin'
const camelize = s => s.split('-').map((word, i) => i > 0 ? word[0].toUpperCase() + word.slice(1) : word).join('');

// Test cases
['background-color', 'list-style-image', '-webkit-transition'].forEach(s => console.log(camelize(s)));

// Filter range
/* Write a function filterRange(arr, a, b) that gets an array
arr, looks for elements with values higher or equal to a and
lower or equal to b and return the result as an array.
The function shouldn't modify the array, it should return the
new array.
*/

/* PREP
  Parameters: an array of numbers, value a, value b
  Returns: a new array with only the values higher or equal to a and lower or equal to b
  Examples:
    [5, 3, 8, 1], 1, 4 returns [3, 1]
  Pseudocode:
    use filter method with comparison and logical operators
*/

function filterRange(arr, a, b) {
  return arr.filter(n => n >= a && n <= b);
}

// Test cases
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // [3, 1]
console.log(arr); // [5, 3, 8, 1]

// Filter range "in place"
/* Write a function filterRangeInPlace(arr, a, b) that gets an
array arr and removes from it all values except those that are
between a and b. The test is: a <= arr[i] <= b.
The function should only modify the array and shouldn't return
anything.
*/

/* PREP
  Parameters: array of numbers, value a, value b
  Returns: none, modifies original array
  Example:
    [5, 3, 8, 1] is modified to [3, 1]
  Pseudocode:
    loop through array
    if element is lower than a or higher than b:
      splice element from array
      decrement i by one
*/

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// Test cases
filterRangeInPlace(arr, 1, 4);
console.log(arr); // [3, 1]

// Sort in decreasing order

let arr1 = [5, 2, 1, -10, 8];
arr1.sort((a, b) => b - a);
console.log(arr1);

// Copy and sort array