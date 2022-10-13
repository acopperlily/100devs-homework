// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// url - always a string
// returns just domain name, after http and www, before dot com
// create regex pattern for 'http://www.'
// remove pattern from url
// split url on dot
// domain name should be index 0 in array

// function domainName(url) {
//   const pattern = /(http(s)?:\/\/)?(www.)?/;
//   url = url.replace(pattern, '').split('.');
//   return url[0];
// }

// Wildin'
// const domainName = (url) =>
//   url.replace(/(http(s)?:\/\/)?(www.)?/, "").split(".")[0];

// Non-Regex
function domainName(url) {
  return url.replace('https://', '')
            .replace('http://', '')
            .replace('www.', '')
            .split('.')[0];
}

// Test cases
console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");
console.log(domainName("www.xakep.ru"), "xakep");
