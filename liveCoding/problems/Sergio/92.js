/*You will be given a string and you task is to check if it is possible to convert that string into a palindrome by removing a single character. If the string is already a palindrome, return "OK". If it is not, and we can convert it to a palindrome by removing one character, then return "remove one", otherwise return "not possible". The order of the characters should not be changed.

For example:

solve("abba") = "OK". -- This is a palindrome
solve("abbaa") = "remove one". -- remove the 'a' at the extreme right. 
solve("abbaab") = "not possible". 
*/

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function removeChar(str){
  let arr = [];
  for(let i = 0; i < str.length; i++) {
    arr.push(str.slice(0, i) + str.slice(i + 1))
  }
  return arr;
}

function solve(word) {
  if(isPalindrome(word)) return 'OK';
  let substring = removeChar(word)
  for (let i = 0; i < substring.length; i++) {
    if (isPalindrome(substring[i])) return "remove one";
  }
  return "not possible"
}

console.log(solve("abba"),"OK");
console.log(solve("abbaa"),"remove one");
console.log(solve("abbaab"),"not possible");
console.log(solve("madmam"),"remove one");
console.log(solve("raydarm"),"not possible");
console.log(solve("hannah"),"OK");