// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

/* PREP
  Parameter: equation - a string of dots, operators, and spaces representing a mathmatical equation
  Returns: the solution of the equation represented by the number of dots
  Examples:
    '..... + ...' returns '........'
    '..... * ..' returns '..........'
    '.. - ..' returns ''
    '..... // ..' returns '..'
  Pseudocode:
    split parameter along spaces
    use conditional or switch statement to determine operator
    calculate dots by using length
    convert that number into number of dots using repeat method
*/

function dotCalculator(equation) {
  let [a, op, b] = equation.split(' ');
  let result = a.length;
  switch (op) {
    case '+':
      result += b.length;
      break;
    case '-':
      result -= b.length;
      break;
    case '*':
      result *= b.length;
      break;
    case '//':
      result = Math.floor(result / b.length);
      break;
    default:
      return 'Invalid operator';
  }
  
  return '.'.repeat(result);
}

// Test cases
["..... + ...............", "..... - ...", "..... - .", "..... * ...", "..... * ..", "..... // ..", "..... // .", ". // ..", ". - ."].forEach(s => console.log(dotCalculator(s)));