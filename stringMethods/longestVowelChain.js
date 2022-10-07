// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

/* PREP
  Parameter: s - a string of lowercase letters
  Returns: length of longest vowel substring
  Examples:
    'codewarriors' returns 2
    'suoidea' returns 3
  Pseudocode:
    initialize 2 variables to keep track of vowel counts
    loop through string
      if letter is vowel, increment vowel count
      if letter is consonant
        if current vowel count is greater than max vowel count, replace max count
        reset current vowel count
*/

function longestVowelChain(s) {
  const vowels = 'aeiou';
  let max = 0;
  let current = 0;
  for (let char of s) {
    if (vowels.includes(char)) {
      current++;
    } else {
      if (current > max) {
        max = current;
      }
      current = 0;
    }
  }
  return max > current ? max : current;
}

// Test cases
['codewarriors', 'suoidea', 'ultrarevolutionariees', 'strengthlessnesses', 'cuboideonavicuare', 'chrononhotonthuooaos', 'iiihoovaeaaaoougjyaw'].forEach(s => console.log(longestVowelChain(s)));