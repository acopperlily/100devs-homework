// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

/* PREP
  Parameters: an integer and a boolean
  Returns: string: salary in pounds, multiplied by 10 if bonus
  Examples:
    10000, true returns '£100000'
    60000, false returns '£60000'
  Pseudocode:
    if bonus, multiply salary by ten
    return salary as template literal
*/

function bonusTime(salary, bonus) {
  if (bonus) salary *= 10;
  return `£${salary}`;
}

// Test cases
console.log(bonusTime(10000, true)); // '£1000000'
console.log(bonusTime(25000, true)); // '£250000'
console.log(bonusTime(10000, false)); // '£10000'
console.log(bonusTime(60000, false)); // '£60000'
console.log(bonusTime(2, true)); // '£20'
console.log(bonusTime(78, false)); // '£78'