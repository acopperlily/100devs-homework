// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// function dup(s) {
//   const result = [];
//   for (let i = 0; i < s.length; i++) {
//     let word = '';
//     for (let j = 0; j < s[i].length; j++) {
//       if (word[word.length - 1] !== s[i][j]) {
//         word += s[i][j];
//       }
//     }
//     result.push(word);
//   }
//   return result;
// }

const dup = s => s.map(word => [...word].filter((char, i, arr) => arr[i+1] !== char).join(''));

// Test cases
console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]), ["codewars", "picaniny", "hubububo"]);
console.log(dup(["abracadabra", "allottee", "assessee"]), ["abracadabra", "alote", "asese"]);
console.log(dup(["kelless", "keenness"]), ["keles", "kenes"]);
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]), ["Wolomolo", "flodoromonlighters", "chuchchi"]);
console.log(dup(["adanac", "soonness", "toolless", "ppellee"]), ["adanac", "sones", "toles", "pele"]);
console.log(dup(["callalloo", "feelless", "heelless"]), ["calalo", "feles", "heles"]);
