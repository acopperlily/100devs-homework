// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

/* PREP
  Parameters: string, a word
  Returns: Boolean, true if string has no repeating letters irrespective of case
  Examples:
    'Dermatoglyphics' == true
    'aba' == false
    'moOse' == false
  Pseudocode:
    Convert string to lowercase
    Create set from string
    Compare length of string to size of set
*/

// function isIsogram(str) {
//   str = str.toLowerCase();
//   strSet = new Set(str);
//   return str.length === strSet.size;
// }

// Wildin'
const isIsogram = str => str.length === new Set(str.toLowerCase()).size;

// Test cases
['Dermatoglyphics', 'isogram', '', 'aba', 'moOse', 'isIsogram'].forEach(s => console.log(isIsogram(s)));