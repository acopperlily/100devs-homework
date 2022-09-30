// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

/* PREP
  Parameter: name - a string
  Returns: a string, 'Hello' plus the name with the first letter capitalized, ending with an exclamation
  Examples:
    'riley' returns 'Hello Riley!'
    'JACK' returns 'Hello Jack!'
  Pseudocode:
    use bracket and toUpperCase methods to convert first letter of name
    use slice and toLowerCase methods to convert the rest of name
    return template string to return the word 'Hello' and exclamation mark
*/

// function greet(name) {
//   let result = name[0].toUpperCase() + name.slice(1).toLowerCase();
//   return `Hello ${result}!`;
// }

const greet = name => `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;

// Test cases
['riley', 'JACK'].forEach(s => console.log(greet(s)));