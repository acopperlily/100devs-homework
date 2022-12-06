// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function countChars(s) {
  const result = {};
  for (let char of s) {
    if (!result[char]) result[char] = 0;
    result[char]++;
  }
  return result;
}

// Test cases
console.log(countChars('aba'), {'a': 2, 'b': 1});
console.log(countChars(''), {});