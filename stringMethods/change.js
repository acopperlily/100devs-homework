// Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

// The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

// For instance:

// "a   **&  cZ"  =>  "10100000000000000000000001"

/* PREP
  Parameter: string - a string of chars
  Returns: a string of length 26, each position represented by a 0 or 1 if letter is present in parameter
  Example:
    'a  **&  cZ' returns '10100000000000000000000001'
  Pseudocode:
    create variable to hold alphabet
    declare empty string
    loop over alphabet
      if char present in parameter, concatenate '1'
      else concatenate '0'
*/

// function change(string) {
//   const letters = 'abcdefghijklmnopqrstuvwxyz';
//   let result = '';
//   const s = string.toLowerCase();
//   for (let letter of letters) 
//     result += s.includes(letter) ? '1' : '0';
//   return result;
// }

// Wildin'
const change = string => [...'abcdefghijklmnopqrstuvwxyz'].map(char => string.toLowerCase().includes(char) ? '1' : '0').join('');

// Test cases
console.log(change('a **&  bZ')); // '11000000000000000000000001'
console.log(change('a  **&  cZ')); // '10100000000000000000000001'