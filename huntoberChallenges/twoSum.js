// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// function twoSum(arr, sum) {
//   const result = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log('i:', i, 'j:', j);
//       if (arr[i] + arr[j] === sum) {
//         console.log(arr[i], arr[j]);
//         result.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return result;
// }

function twoSum(arr, sum) {
  const result = [];
  const complements = [];
  for (let num of arr) {
    let complement = sum - num;
    if (complements.indexOf(complement) !== -1) {
      result.push([num, complement]);
    }
    complements.push(num);
  }
  return result;
}

// Test cases
console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);