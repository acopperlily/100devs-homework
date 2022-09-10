// JavaScript.Info Array Methods

// splice
console.log('splice method:');
let arr = ['I', 'go', 'home'];
delete arr[1]; // remove 'go'
console.log(arr[1]); // undefined
console.log(arr.length); // 3

arr = ['I', 'study', 'JavaScript'];
arr.splice(1, 1); // from index 1 remove 1 element
console.log(arr); // ['I', 'JavaScript']

arr = ['I', 'study', 'JavaScript', 'right', 'now'];
arr.splice(0, 3, "Let's", 'dance'); // remove first 3 elements and replace
console.log(arr); // ["Let's", 'dance', 'right', 'now']

arr = ['I', 'study', 'JavaScript', 'right', 'now'];
let removed = arr.splice(0, 2);
console.log(removed); // ['I', 'study']

arr = ['I', 'study', 'JavaScript'];
arr.splice(2, 0, 'complex', 'language');
console.log(arr); // ['I', 'study', 'complex', 'language', 'JavaScript']

arr = [1, 2, 5];
arr.splice(-1, 0, 3, 4);
console.log(arr); // [1, 2, 3, 4, 5]

// slice
console.log(`\nslice method:`);
arr = ['t', 'e', 's', 't'];
console.log(arr.slice(1, 3)); // ['e', 's']
console.log(arr.slice(-2)); // ['s', 't']

// concat
console.log(`\nconcat method:`);
arr = [1, 2];
console.log(arr.concat([3, 4])); // [1, 2, 3, 4]
console.log(arr.concat([3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(arr.concat([3, 4], 5, 6)); // [1, 2, 3, 4, 5, 6]

let arrayLike = {
  0: 'something',
  length: 1
};

console.log(arr.concat(arrayLike)); // [1, 2, {'0': 'something', length: 1}]

arrayLike = {
  0: 'something',
  1: 'else',
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log(arr.concat(arrayLike)); // [1, 2, 'something', 'else']

// Iterate: forEach
console.log(`\nforEach method:`);
let lotr = ['Bilbo', 'Gandalf', 'Nazgul'];
lotr.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// Searching in array
// indexOf, lastIndexOf, includes
console.log(`\nindexOf, lastIndexOf, includes methods:`);
arr = [1, 0, false];
console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1
console.log(arr.includes(1)); // true

let fruits = ['Apple', 'Orange', 'Apple'];
console.log(fruits.indexOf('Apple')); // 0 (first)
console.log(fruits.lastIndexOf('Apple')); // 2 (last)

const nanExample = [NaN];
console.log(nanExample.indexOf(NaN)); // -1 (should be 0)
console.log(nanExample.includes(NaN)); // true (correct)

// find, findIndex, findLastIndex
console.log(`\nfind, findIndex, findLastIndex methods:`);
let users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Pete'},
  {id: 3, name: 'Mary'},
  {id: 4, name: 'John'}
];

let user = users.find(item => item.id == 1);
console.log(user.name); // John

console.log(users.findIndex(user => user.name == 'John')); // 0
// console.log(users.findLastIndex(user => user.name == 'John')); // 3 NOT SUPPORTED IN NODE!
console.log('The findLastIndex method is not supported in Node.js!');

// filter
console.log(`\nfilter method:`);
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length); // 2

// Transform an array
// map
console.log(`\nmap method:`);
let lengths = lotr.map(item => item.length);
console.log(lengths); // [5, 7, 6]

// sort
console.log(`\nsort method:`);
arr = [1, 2, 15];
arr.sort();
console.log(arr); // [1, 15, 2] (sorted as strings by default)

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

arr.sort(compareNumeric);
console.log(arr); // [1, 2, 15]

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  console.log(a + ' <> ' + b);
  return a - b;
}); // shows how elements are being compared

arr = [1, 15, 2];
arr.sort(function(a, b) {return a - b;});
// Same as arr.sort((a, b) => a - b);
console.log(arr);

// Use localeCompare for strings
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a > b ? 1 : -1)); // wrong
console.log(countries.sort((a, b) => a.localeCompare(b))); // correct

// reverse
console.log(`\nreverse method:`);
arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]

// split and join
console.log(`\nsplit, join methods`);
let names = 'Bilbo, Gandalf, Nazgul';
let nameArr = names.split(', ');

for (let name of nameArr) {
  console.log(`A message to ${name}.`);
}

names += ', Saruman';
nameArr = names.split(', ', 2);
console.log(nameArr); // ['Bilbo', 'Gandalf']

let str = 'test';
console.log(str.split('')); // ['t', 'e', 's', 't']

str = lotr.join(';')
console.log(str); // 'Bilbo;Gandalf;Nazgul'

// reduce, reduceRight
console.log(`\nreduce, reduceRight methods:`);
arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15
// reduceRight just goes from right to left

// Array.isArray
console.log(`\nisArray method:`);
console.log(typeof {}); // object
console.log(typeof []); // object (shit)

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

// thisArg
console.log(`\nthisArg optional parameter:`);
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

let soldiers = users.filter(army.canJoin, army);
// same as users.filter(user => army.canJoin(user));
console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

// some, every
console.log(`\nsome, every methods:`);
const ages = [3, 10, 18, 20];
const ages2 = [1, 5, 3, 12];
function checkAdult(age) {
  return age > 18;
}
console.log(ages.some(checkAdult)); // true
console.log(ages2.some(checkAdult)); // false

function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

console.log(arraysEqual([1, 2], [1, 2])); // true
console.log(arraysEqual([1, 2], [2, 1])); // false

// fill
console.log(`\nfill method:`);
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.fill('Kiwi');
console.log(fruits); // all elements replaced with 'Kiwi'

fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.fill('Kiwi', 2, 4);
console.log(fruits); // ['Banana', 'Orange', 'Kiwi', 'Kiwi']

// copyWithin
console.log(`\ncopyWithin method:`);
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.copyWithin(2, 0); // copy 1st 2 elements to last 2
console.log(fruits); // ['Banana', 'Orange', 'Banana', 'Orange']

fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'];
fruits.copyWithin(2, 0, 2); // copy 1st 2 elements to 3rd and 4th position
console.log(fruits); // ['Banana', 'Orange', 'Banana', 'Orange', 'Kiwi']

// flat, flatMap
console.log(`\nflat, flatMap methods:`);
const a1 = [0, 1, 2, [3, 4]];
console.log(a1.flat()); // [0, 1, 2, 3, 4]

const a2 = [0, 1, 2, [[[3, 4]]]];
console.log(a2.flat(2)); // [0, 1, 2, [3, 4]]

const a3 = [1, 2, [3], [4, 5], 6, []];
const flattened = a3.flatMap(num => num);
console.log(flattened); // [1, 2, 3, 4, 5, 6]