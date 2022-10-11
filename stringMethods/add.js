// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

// function add(a, b) {
//   return a == b;
// }

/* PREP
  Parameters: a, b - both numbers, but one is string type
  Returns: a Boolean, true if a and b are the same number, else false
  Examples:
    '1', 1 returns true
    1, '0' returns false
  Pseudocode:
    compare a and b with double equals
*/

const add = (a, b) => a == b;

// Test cases
console.log(add('1', 1)); // true
console.log(add(1, '1')); // true
console.log(add(1, '0')); // false
console.log(add('11', 11)); // true
console.log(add(12, 12)); // true
console.log(add(120, '021')); // false