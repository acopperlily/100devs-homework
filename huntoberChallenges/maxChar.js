// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!

function maxChar(s) {
  const count = {};
  for (let char of s) {
    if (!count[char]) {
      count[char] = 0;
    }
    count[char]++;
  }
  
  let maxCount = 0;
  let maxChar = '';
  for (let [k, v] of Object.entries(count)) {
    if (v > maxCount) {
      maxCount = v;
      maxChar = k;
    }
  }

  return maxChar;
}

console.log(maxChar('Hello World!'), 'l');