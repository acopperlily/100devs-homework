// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

/* PREP
  Parameters: a string of chars
  Returns: a Boolean, true if all chars are unique, false if not
  Examples:
    'abcd' returns true
    'aA' returns true
    'aba' returns false
  Pseudocode:
    create set from string
    convert set to array then join
    compare new string to old string
*/

// function hasUniqueChars(str) {
//   let result = new Set(str);
//   result = [...result].join('');
//   return result === str;
// }

// Wildin'
const hasUniqueChars = s => s === [...new Set(s)].join('');

// Test cases
['  nAa', '++--', 'abcdef', 'aA'].forEach(s => console.log(hasUniqueChars(s)));