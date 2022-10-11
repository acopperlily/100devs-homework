// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a

/* PREP
  Parameter: arr - an array of numbers
  Returns: a string of letters converted from the numbers
  Example:
    [84, 101, 115, 116] returns 'Test'
  Pseudocode:
    use map method to loop over array
    use fromCharCode string method to convert each number
    use join method to form single string from letters
*/

// function arrowFunc(arr) {
//   return arr.map(n => String.fromCharCode(n)).join('');
// }

const arrowFunc = arr => arr.map(n => String.fromCharCode(n)).join('');

// Test cases
console.log(arrowFunc([84, 101, 115, 116])); // 'Test'
console.log(arrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72])); // 'FUS ROH DAH'