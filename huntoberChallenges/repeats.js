// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// parameter is array of integers, only two nums occur once, the rest occur twice
// returns the sum of the two unique nums
// map nums into object, track the counts
// filter values that occur only once and sum them

// OR just chain the filter and reduce methods, comparing nums to indices lol

// function repeats(arr) {
//   const count = {};
//   for (let num of arr) {
//     if (!count.hasOwnProperty(num)) count[num] = 0;
//     count[num]++;
//   }
//   let result = 0;
//   for (let [k, v] of Object.entries(count)) {
//     if (v == 1) result += +k;
//   }
//   return result;
// }

const repeats = (arr) =>
  arr
    .filter((n) => arr.indexOf(n) === arr.lastIndexOf(n))
    .reduce((acc, c) => acc + c, 0);

// Test cases
console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);
