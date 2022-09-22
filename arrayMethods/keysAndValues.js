// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

/* PREP
  Parameters: an object
  Returns: an array containing an array of keys and an array of values
  Examples:
    {a: 1, b: 2, c: 3} returns [['a', 'b', 'c'], [1, 2, 3]]
    {} returns [[], []]
  Pseudocode:
    initialize empty nested arrays
    loop through object
      - push keys to first nested array
      - push values to second nested array
  Pseudocode Wildin' version:
    use Object keys and values methods to create separate arrays
*/

// function keysAndValues(data) {
//   const result = [[], []];
//   for (let [k, v] of Object.entries(data)) {
//     result[0].push(k);
//     result[1].push(v);
//   }
//   return result;
// }

// Wildin'
const keysAndValues = data => [Object.keys(data), Object.values(data)];

// Test cases
console.log(keysAndValues({a: 1, b: 2, c: 3}));
console.log(keysAndValues({}));
console.log(keysAndValues({1: 'a', 2: 'b', 3: 'c'}));