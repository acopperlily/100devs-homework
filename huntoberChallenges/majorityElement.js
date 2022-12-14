// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

function majorityElement(nums) {
  const count = {};
  for (let num of nums) {
    if (!count[num]) count[num] = 0;
    count[num]++;
  }
  let majority = '';
  let max = 0;
  for (let [k, v] of Object.entries(count)) {
    if (v > max) {
      max = v;
      majority = k;
    }
  }
  return +majority;
}

// Test cases
console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
console.log(majorityElement([3, 3, 4]), 3);
console.log(majorityElement([1, 1, 1, 1, 1, 1, 8]), 1);