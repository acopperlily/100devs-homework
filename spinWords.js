// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

/* PREP
  Parameters: a string of one or more words
  Returns: the same string but all words with five or more letters are reversed
  Examples:
    'This is a test' returns 'This is a test'
    'Hey fellow warriors' returns 'Hey wollef sroirraw'
  Pseudocode:
    split string into array of words
    map each word into new array
      if word.length >= 5, reverse the word
    join the array and return it
*/

// function spinWords(str) {
//   const strArr = str.split(' ');
//   const result = strArr.map(word => word.length < 5 ? word : [...word].reverse().join(''));
//   return result.join(' ');
// }

// Wildin'
const spinWords = s => s.split(' ').map(word => word.length < 5 ? word : [...word].reverse().join('')).join(' ');

// Test cases
['Welcome', 'Hey fellow warriors', 'This is a test', 'This is another test', 'You are almost to the last test', 'Just kidding there is still one more', 'Seriously this is the last one'].forEach(s => console.log(spinWords(s)));