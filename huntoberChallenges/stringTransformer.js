// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
  let revStr = str.split(' ').reverse().join('');
  revStr = [...revStr].map(char => (char >= 'A' && char <= 'Z')
                        ? char.toLowerCase()
                        : char.toUpperCase());
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      revStr.splice(str.length - i - 1, 0, ' ');
    }
  }
  return revStr.join('');
}


// Test cases
console.log(stringTransformer('Example string'), 'STRING eXAMPLE');
console.log(
  stringTransformer("Os   Mqlg   Gjl Cq   Uoql   Kcgae     Ezadn"),
  "eZADN     kCGAE   uOQL   cQ gJL   mQLG   oS"
);
console.log(stringTransformer('  V   Ugt     Dsrho     Jmr   Hlke     Tjm   Su   Rf  '), '  rF   sU   tJM     hLKE   jMR     dSRHO     uGT   v  ');