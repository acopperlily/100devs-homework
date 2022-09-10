// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

/* PREP
  Parameter: a string of words
  Returns: same string with words in reverse order
  Examples:
    'hello world!' returns 'world! hello'
  Pseudocode:
    split string into array of words
    reverse array
    join words
*/

// function reverseWords(str) {
//   const strArr = str.split(' ');
//   strArr.reverse();
//   return strArr.join(' ');
// }

// Wildin'
const reverseWords = s => s.split(' ').reverse().join(' ');

// Test cases
['hello world!', "yoda doesn't speak like this", 'foobar', 'kata editor', 'row row row your boat'].forEach(s => console.log(reverseWords(s)));