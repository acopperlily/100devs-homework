// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// function duplicateEncode(word) {
//   let result = '';
//   for (let char of word) {
//     char = char.toLowerCase();
//     result += word.indexOf(char) === word.lastIndexOf(char)
//     ? '(' : ')';
//   }
//   return result;
// }

function duplicateEncode(word) {
  const s = [...word.toLowerCase()];
  return s.map(char => s.indexOf(char) === s.lastIndexOf(char) ? '(' : ')').join('');
}

// Test cases
console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())');
console.log(duplicateEncode('(( @'), '))((');
console.log(duplicateEncode('PPPPP@PPIPP'), ')))))())())');
console.log(duplicateEncode('Supralapsarian'), ')()))()))))()(');
