// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

/* PREP
  Parameters: an array consisting of strings 'good' and 'bad
  Returns: one of three different strings depending on how many 'good's or 'bad's are in the array:
    'Publish!': 1 or 2 'good's
    'I smell a series!': more than 2 'good's
    'Fail': 0 'good's
  Examples:
    ['good', 'bad'] returns 'Publish!
    ['bad', 'bad', 'bad'] returns 'Fail!'
    ['good', 'bad', 'good', 'good'] returns 'I smell a series!'
  Pseudocode:
    loop through array to count all instances of 'good'
    compare 'good' count by using a switch statement to return the correct string
*/

function well(x) {
  const count = x.filter(idea => idea === 'good').length;
  switch (count) {
    case 0:
      return 'Fail!';
    case 1: 
    case 2:
      return 'Publish!';
    default:
      return 'I smell a series!';
  }
}

// Test cases
console.log(well(['bad', 'bad', 'bad'])); // Fail!
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); // Publish!
console.log(well(['bad', 'good', 'good']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); // I smell a series!