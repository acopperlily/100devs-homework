// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

function ransomNote(note, magazine) {
  let words = [];
  let word = '';
  for (let char of magazine.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      word += char;
    } else if (char === ' ') {
      words.push(word);
      word = '';
    }
  }

  const wordCount = {};
  for (let word of words) {
    if (!wordCount[word]) wordCount[word] = 0;
    wordCount[word]++;
  }
  note = note.split(' ');
  for (let word of note) {
    if (!wordCount[word]) return false;
    if (wordCount[word] === 0) return false;
    wordCount[word]--;
  }
  return true;
}


const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// Test cases
console.log(ransomNote('sit ad est sint', magazine), true);
console.log(ransomNote('sit ad est love', magazine), false);
console.log(ransomNote('sit ad est sint in in', magazine), true);
console.log(ransomNote('sit ad est sint in in in in', magazine), false);