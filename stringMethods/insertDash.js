// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

/* PREP
  Parameters: a positive integer
  Returns: a string with dashes inserted between odd numbers
  Examples:
    454793 returns '4547-9-3'
    123456 returns '123456'
  Pseudocode:
    convert number to string
    declare variable to hold new string
    insert first number into new string
    loop through number string
      compare current digit to previous digit
      if both are odd, append dash and current digit
      else, append current digit only
    return new string
*/

function insertDash(num) {
  const numStr = String(num);
  let result = numStr[0];
  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] % 2 !== 0 && numStr[i-1] % 2 !== 0)
      result += '-';
    result += numStr[i];
  }
  return result;
}

// Wildin' (eh, the other version is better)
// const insertDash = num => [...String(num)].map((n, i, arr) => n % 2 !== 0 && arr[i - 1] % 2 !== 0 && i !== 0 ? `-${n}` : n).join('');

// Test cases
[454793, 123456, 1003567].forEach(n => console.log(insertDash(n)));