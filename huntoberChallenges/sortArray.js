// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(arr) {
  const odds = arr.filter(n => n % 2 !== 0).sort((a, b) => a - b);
  let odd = 0;
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] % 2 !== 0) {
      arr[i] = odds[odd];
      odd++;
    }
  }
  return arr;
}


// Test cases
console.log(sortArray([7, 1]), [1, 7]);
console.log();
console.log(sortArray([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4]);
console.log();
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]);