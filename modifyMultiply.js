// You are to write an function that takes a string as it's first paramter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5) 
// Should return

// "string-string-string-string-string"

// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

// Simple. Good luck.

/* PREP
  Parameters:
    a string of words,
    an integer representing a word in the string, 0 indexed,
    number of times to repeat indexed word
  Returns: the indexed word repeated, separated by hyphens
  Examples: "This is a string", 3, 5 returns:
    "string-string-string-string-string"
  Pseudocode:
    split string into an array of separate words
    locate the word at the given index
    create new string out of word and hyphen repeated x times
    return new string as slice to remove last hyphen
*/

// function modifyMultiply(str, loc, num) {
//   const words = str.split(' ');
//   let result = words[loc] + '-';
//   result = result.repeat(num);
//   return result.slice(0, -1);
// }

// Wildin'
const modifyMultiply = (s, i, n) => [s
    .split(' ')[i] + '-']
    .join()
    .repeat(n)
    .slice(0, -1);

// Test cases
console.log(modifyMultiply('This is a string', 3, 5)); // string-
console.log(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.", 8, 10)); // that-
console.log(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence", 1, 1)); // means
console.log(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.", 6, 8)); // ignorance-
console.log(modifyMultiply("Everything happening around me is very randome. I am enjoying the phase, as the journey is far more enjoyable than the destination.", 2, 5)); // around-