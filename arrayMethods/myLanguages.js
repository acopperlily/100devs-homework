// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

/* PREP
  Parameters: an object containing languages as keys and scores as integer values
  Returns: an array of languages where the score is 60 or above, in descending order
  Examples:
    {'Java': 10, 'Ruby': 80, 'Python': 65} returns ['Ruby', 'Python']
    {'C++': 50, 'ASM': 10} returns []
  Pseudocode:
    create array of filtered scores and sort
    initialize empty array
    loop through scores array
      - match score with language
      - push language to array
*/

function myLanguages(results) {
  const scores = Object.values(results)
    .filter(score => score >= 60)
    .sort((a, b) => b - a);

  const languages = [];
  for (let score of scores) {
    languages.push(Object.keys(results)
      .find(key => results[key] === score));
  }

  return languages;
}

// Test cases
console.log(myLanguages({'Java': 10, 'Ruby': 80, 'Python': 65}));
console.log(myLanguages({'Hindi': 60, 'Greek': 71, 'Dutch': 93}));
console.log(myLanguages({'C++': 50, 'ASM': 10, 'Haskell': 20}));