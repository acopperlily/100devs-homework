// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// function last(x) {
//   return x.split(' ')
//           .map(word => [...word].reverse().join(''))
//           .sort()
//           .map(word => [...word].reverse().join(''));         
// }

const last = x => x.split(' ').sort((a, b) => a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0));

// Test cases
console.log(last('man i need a taxi up to ubud'));
console.log(last('what time are we climbing up the volcano'));
console.log(last('take me to semynak'));