// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

/* PREP
  Parameters: a string of words
  Returns: same string with all duplicate words removed
  Example: 'alpha alpha beta beta beta gamma gamma' returns 'alpha beta gamma'
  Pseudocode: 
    split string into array of words
    create set from array
    create new array from set
    join array into new string
*/

// function removeDuplicateWords(s) {
//   const sArr = s.split(' ');
//   const arrSet = new Set(sArr);
//   const result = Array.from(arrSet);
//   return result.join(' ');
// }

// Wildin'
const removeDuplicateWords = (s) => [...new Set(s.split(' '))].join(' ');

// Test case
console.log(removeDuplicateWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));