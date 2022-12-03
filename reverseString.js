// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

// function reverseString(s) {
//   let result = '';
//   for (let char of s) {
//     result = char + result;
//   }
//   return result;
// }

const reverseString = s => s ? s.slice(-1) + reverseString(s.slice(0, -1)) : '';

// Test case
console.log(reverseString('Hello World!'), '!dlroW olleH');