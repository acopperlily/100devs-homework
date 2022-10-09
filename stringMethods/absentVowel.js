// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

/* PREP
  Parameter: x - a sentence containing all vowels but one
  Returns: an integer 0 thru 5 representing the missing vowel
  Examples:
    see above lol
  Pseudocode:
    create variable to hold vowels
    loop over vowels
      use includes method to check if each vowel is in string
*/

function absentVowel(x) {
  const vowels = 'aeiou';
  for (let i = 0; i < vowels.length; i++) {
    if (!x.toLowerCase().includes(vowels[i]))
      return i;
  }
}

// Test cases
console.log(absentVowel('John Doe hs seven red pples under his bsket')); // 0
console.log(absentVowel('Bb Smith sent us six neatly arranged range bicycles')); // 3
console.log(absentVowel('bUtt Ick AlOhA mIssIng')); // 1