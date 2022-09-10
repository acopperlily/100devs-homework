// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

/* PREP
  Parameters: a string containing numbers and letters
  Returns: only the numbers in the string, combined as one number
  Examples:
    'a1b2c3' returns 123
    '123' returns 123
  Pseudocode:
    convert string to array
    filter numbers from array
    convert numbers to single integer
*/

// function filterString(value) {
//   const strArr = [...value];
//   const nums = strArr.filter(char => char >= '0' && char <= '9');
//   return Number(nums.join(''));
// }

// Wildin'
const filterString = s => +[...s].filter(c => c >= '0' && c <= '9').join('');

// Test cases
['123', 'a1b2c3', 'aa1bb2cc3dd'].forEach(s => console.log(filterString(s)));