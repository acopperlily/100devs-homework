// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

/* PREP
  Parameter: s - string of letters and/or numbers
  Returns: only the numbers from the string in integer form
  Examples:
    'hell5o wor6ld' returns 56
    '1' returns 1
  Pseudocode:
    convert string to array
    use filter method to get numbers
    convert numbers to integer
*/

function getNumberFromString(s) {
  let num = '';
  for (let char of s) {
    if (char >= '0' && char <= '9')
      num += char;
  }
  return parseInt(num);
}

// Test cases
['1', '123', 'hell5o wor6ld', 'this is number: 7', '$100 000 000', 'y21wv52040y8'].forEach(s => console.log(getNumberFromString(s)));