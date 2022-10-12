// Let's start off with a classic! Make sure you talk through prep! 

// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

/* PREP
  Parameter: n - a positive integer
  Returns: nothing! Starting from 1 to the parameter, the function prints:
    "Fizz" if the number is divisible by 3
    "Buzz" if the number is divisible by 5
    "FizzBuzz" if the number is divisible by both 3 and 5
    The integer itself if number not divisible by either 3 or 5
  Examples:
    8 prints 1 2 'Fizz' 4 'Buzz' 'Fizz' 7 8
    16 prints above plus 'Fizz' 'Buzz' 11 'Fizz' 13 14 'Fizz Buzz' 16
  Pseudocode:
    loop from 1 through the number, using modulo operator
    use conditionals to check for divisors
    check divisibility by both 3 and 5 first
    then check for divisibility by either 3 or 5
    else print integer
*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('Fizz Buzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else (console.log(i));
  }
}

// Test cases
[4, 10, 17, 25, 39].forEach(n => console.log(fizzBuzz(n)));