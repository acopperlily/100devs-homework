// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

/* PREP
  Parameter: s - a string of numbers
  Returns: a string where each number is repeated that number of times
  Examples:
    '312' returns '333122'
    '00' returns ''
  Pseudocode:
    initialize empty string
    loop through number string
      use repeat method to concatenate value to new string
*/

// function explode(s) {
//   let result = '';
//   for (let n of s)
//     result += n.repeat(n);
//   return result;
// }

// Wildin'
const explode = s => [...s].map(n => n.repeat(n)).join('');

// Test cases
['312', '102269', '0', '000', '123'].forEach(s => console.log(explode(s)));