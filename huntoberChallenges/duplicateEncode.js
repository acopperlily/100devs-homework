// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// function duplicateEncode(word) {
//   let s = word.toLowerCase();
//   let result = '';
//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//       result += '(';
//     } else result += ')';
//   }
//   return result;
// }

// function duplicateEncode(word) {
//   let s = word.toLowerCase();
//   let result = '';
//   for (let char of s) {
//     result += s.indexOf(char) === s.lastIndexOf(char) ? '(' : ')';
//   }
//   return result;
// }

const duplicateEncode = word => [...word.toLowerCase()].map(char => word.indexOf(char) === word.lastIndexOf(char) ? '(' : ')').join('');

// Test cases
console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())');
console.log(duplicateEncode('(( @'), '))((');