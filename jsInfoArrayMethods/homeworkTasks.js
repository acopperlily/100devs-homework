// JavaScript.Info Tasks

/* Translate border-left-width to borderLeftWidth
Write the function camelize(str) that changes dash-separated
words like "my-short-string" into camel-cased "myShortString".
*/

/* PREP
  Parameters: string of words separated by dashes
  Returns: camel-cased string with dashes removed
  Examples:
    'background-color' returns 'backgroundColor'
    'list-style-image' returns 'listStyleImage'
  Pseudocode:
    split string into array using '-' as separator
    loop through array, capitalizing every word except the first
    join array into string
*/

// function camelize(str) {
//   const strArr = str.split('-');
//   result = strArr.map((word, i) => i > 0 ? word[0].toUpperCase() + word.slice(1) : word);
//   return result.join('');
// }

// Wildin'
const camelize = s => s.split('-').map((word, i) => i > 0 ? word[0].toUpperCase() + word.slice(1) : word).join('');

// Test cases
['background-color', 'list-style-image', '-webkit-transition'].forEach(s => console.log(camelize(s)));

// Filter range
/* Write a function filterRange(arr, a, b) that gets an array
arr, looks for elements with values higher or equal to a and
lower or equal to b and return the result as an array.
The function shouldn't modify the array, it should return the
new array.
*/

/* PREP
  Parameters: an array of numbers, value a, value b
  Returns: a new array with only the values higher or equal to a and lower or equal to b
  Examples:
    [5, 3, 8, 1], 1, 4 returns [3, 1]
  Pseudocode:
    use filter method with comparison and logical operators
*/

function filterRange(arr, a, b) {
  return arr.filter(n => n >= a && n <= b);
}

// Test cases
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // [3, 1]
console.log(arr); // [5, 3, 8, 1]

// Filter range "in place"
/* Write a function filterRangeInPlace(arr, a, b) that gets an
array arr and removes from it all values except those that are
between a and b. The test is: a <= arr[i] <= b.
The function should only modify the array and shouldn't return
anything.
*/

/* PREP
  Parameters: array of numbers, value a, value b
  Returns: none, modifies original array
  Example:
    [5, 3, 8, 1] is modified to [3, 1]
  Pseudocode:
    loop through array
    if element is lower than a or higher than b:
      splice element from array
      decrement i by one
*/

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// Test cases
filterRangeInPlace(arr, 1, 4);
console.log(arr); // [3, 1]

// Sort in decreasing order

let arr1 = [5, 2, 1, -10, 8];
arr1.sort((a, b) => b - a);
console.log(arr1);

// Copy and sort array
/* We have an array of strings arr. We'd like to have a sorted
copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.
*/

/* PREP
  Parameter: an array of strings
  Returns: a sorted copy of same array
  Examples:
    ['HTML', 'JavaScript', 'CSS'] returns ['CSS', 'HTML', 'JavaScript'] (leaving original array unmodified)
  Pseudocode:
    use slice method to make copy of array
    sort copy alphabetically
*/

// function copySorted(arr) {
//   const result = arr.slice(0);
//   return result.sort();
// }

// Wildin'
const copySorted = arr => arr.slice(0).sort();

// Test cases
let languages = ['HTML', 'JavaScript', 'CSS'];
let sorted = copySorted(languages);
console.log(sorted);
console.log(languages);

// Create an extendable calculator
/* Create a constructor function Calculator that creates
"extendable" calculator objects.
The task consists of two parts:

1. First, implement the method calculate(str) that takes a
string like "1 + 2" in the format "NUMBER operator NUMBER"
(space-delimited) and returns the result.
Should understand plus + and minus -.

2. Then add the method addMethod(name, func) that teaches the
calculator a new operation. It takes the operator name and the
two-argument function func(a, b) that implements it.

No parentheses or complex expressions in this task.
The numbers and operator are delimited with exactly one space.
There may be error handling if you'd like to add it.
*/

/* PREP
  Parameters: a string in the format of number operator number
  Returns: the result of performing that calculation
  Examples:
    '3 + 7' returns 10
    '74 - 5' returns 69
  Pseudocode:
    split the string argument using space as separator
    assign new array elements to variables
    use conditional to perform correct calculation
*/

// function Calculator() {
//   this.calculate = function(str) {
//     let [a, op, b] = str.split(' ');
//     a = Number(a);
//     b = Number(b);
//     if (op === '+') return a + b;
//     if (op === '-') return a - b;
//     return 'Something went wrong';
//   }
// }

function Calculator() {
  this.calculate = function(str) {
    let [a, op, b] = str.split(' ');
    a = Number(a);
    b = Number(b);
    result = math(a, op, b);
    return result;
  }

  math = function(a, op, b) {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      default: return 'Something went wrong';
    }
  }
}

let calc = new Calculator;
console.log(calc.calculate('3 + 7')); // 10
console.log(calc.calculate('74 - 5')); // 69

// let powerCalc = new Calculator;
// powerCalc.addMethod('*', (a, b) => a * b);
// powerCalc.addMethod('/', (a, b) => a / b);
// powerCalc.addMethod('**', (a, b) => a ** b);

// let calcResult = powerCalc.calculate('2 ** 3');
// console.log(calcResult); // 8

// Map to names
/* You have an array of user objects, each one has user.name.
Write the code that converts it into an array of names.
*/

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [ john, pete, mary];

let names = users.map(user => user.name);

console.log(names);

// Map to objects
/* You have an array of user objects, each one has name,
surname and id. Write the code to create another array from
it, of objects with id and fullName, where fullName is
generated from name and surname.
*/

john = { name: 'John', surname: 'Smith', id: 1 };
pete = { name: 'Pete', surname: 'Hunt', id: 2 };
mary = { name: 'Mary', surname: 'Key', id: 3 };

users = [ john, pete, mary];

let usersMapped = users.map(user => {
  return { fullName: `${user.name} ${user.surname}`, id: user.id }; 
});

console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith

// Sort users by age
/* Write the function sortByAge(users) that gets an array of
objects with the age property and sorts them by age.
*/

/* PREP
  Parameters: array of objects with age property
  Returns: none, sorts original array by age
  Examples:
    see below
  Pseudocode:
    sort by age property using a - b approach
*/

john = { name: 'John', age: 25 };
pete = { name: 'Pete', age: 30 };
mary = { name: 'Mary', age: 28 };

arr = [ pete, john, mary ];

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}


sortByAge(arr);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

// Shuffle an array
/* Write the function shuffle(array) that shuffles (randomly
reorders) elements of the array. Multiple runs of shuffle may
lead to different orders of elements.
*/

/* PREP
  Parameters: array of elements
  Returns: a random reordering of elements
  Examples:
    [1, 2, 3] returns [3, 2, 1] or [1, 3, 2] etc.
  Pseudocode:

*/

arr = [1, 2, 3];

// Turns out this isn't so random after all
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);

// Get average age
/* Write the function getAverageAge(users) that gets an array
of objects with property age and returns the average age.
*/

/* PREP
  Parameter: array of objects with age property
  Returns: the average age
  Examples:
    see below
  Pseudocode:
    use reduce method to sum ages
    divide total by number of users
*/

mary.age = 29;

arr = [ john, pete, mary ];

// function getAverageAge(users) {
//   const total = users.reduce((acc, c) => acc + c.age, 0);
//   return total / users.length;
// }

// Wildin'
const getAverageAge = users => users.reduce((acc, c) => acc + c.age, 0) / users.length;

console.log(arr);
console.log(getAverageAge(arr)); // 28

// Filter unique array members
/* Let arr be an array. Create a function unique(arr) that should
return an array with unique items of arr.
*/

/* PREP
  Parameter: an array
  Returns: an array with only the unique elements
  Example:
    see below
  Pseudocode:
    create new set from array
    transform set to array
*/

// function unique(arr) {
//   return [...new Set(arr)];
// }

// Well, the "book" solution uses a loop with the includes method, but whatever
const unique = arr => [...new Set(arr)];

let strings = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

console.log(unique(strings));

// Create keyed object from array
/* Let's say we received an array of users in the form
{id:..., name:..., age:... }. Create a function groupById(arr)
that creates an object from it, with id as the key, and array
items as values.
*/

/* PREP
  Parameter: an array of objects
  Returns: an object with the id as key and array items as values
  Examples: see below
  Pseudocode:

*/

users = [
  {id: 'john', name: 'John Smith', age: 20},
  {id: 'ann', name: 'Ann Smith', age: 24},
  {id: 'pete', name: 'Pete Peterson', age: 31}
];

// I did all this before I realized it said way down at the bottom to use the reduce method. Like, wut?
function groupById(users) {
  let result = {};
  users.forEach(user => {
    return result[user.id] = {
      id: user.id,
      name: user.name,
      age: user.age
    };
  });
  return result;
}

let usersById = groupById(users);

console.log(usersById);