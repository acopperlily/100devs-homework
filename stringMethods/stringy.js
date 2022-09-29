// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

/* PREP
  Parameters: a positive integer called size
  Returns: a string of alternating '1's and '0's of length size
  Examples:
    6 returns '101010'
    4 returns '1010'
  Pseudocode:
    initialize empty string
    loop size times
      when i is even, concatenate '1'
      when i is odd, concatenate '0'
*/

// function stringy(size) {
//   let result = '';
//   for (let i = 0; i < size; i++) {
//     result += i % 2 === 0 ? '1' : '0';
//   }
//   return result;
// }

// Wildin'
const stringy = size => Array.from({length: size}, (_, i) => i % 2 === 0 ? '1' : '0').join('');

// Test cases
[6, 4, 12].forEach(n => console.log(stringy(n)));