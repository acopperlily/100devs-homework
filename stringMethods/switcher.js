// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

/* PREP
  Parameter: x - an array of integers in string form
  Returns: a string after you map the integers to characters
  Examples:
    ['4', '24'] returns 'wc'
    ['24', '12', '23', '22', '27'] returns code!
  Pseudocode:
    declare empty string
    loop through array
      if n is 27, 28, or 29, concatenate '!', '?', or ' ' respectively
      else calculate char codes using string methods
*/

function switcher(x) {
  let result = '';
  for (let n of x) {
    if (n == '27') result += '!';
    else if (n == '28') result += '?';
    else if (n == '29') result += ' ';
    else
      result += String.fromCharCode(26 - n + 'a'.charCodeAt());
  }

  return result;
}

// Test cases
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // 'codewars'
console.log(switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4'])); // 'btswmdsbd kkw'
console.log(switcher(['4', '24'])); // 'wc'