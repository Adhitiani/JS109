// https://www.codewars.com/kata/5bcd90808f9726d0f6000091

/*
-> string
<- string
- do I only return the number in length of longest substring? (just return the length)
- no spaces need to be considered
- do I need - ''? 
- are the letter case sensitive? assume they are

D/A: 
-> string
- get substrings (sub function)
- filter array to filter non unique
- sort filtered array to descending order such that [0] is the longest substring
<- return length of longest substring


*/

function longestSubstringOf(str) { // passess all tests but does not pass the efficiency test
  let ary = substringArray(str);
  // filter out elements with repeating characters
  let newAry = ary.filter(substr => {
    let tmp = substr;
    for (let i = 0; i < substr.length; i += 1) {
      let replaced = substr.replace(substr[i], '');
      if (replaced.includes(substr[i])) {
        return false;
      }
    }
    return true;
  });

  newAry.sort((a, b) => b.length - a.length);
  let longestSubStr =  newAry[0];
  return newAry[0].length;
}

function substringArray(str) {
  let ary  = [];
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length; j += 1) {
      ary.push(str.slice(i, j + 1));
    }
  }
  return ary;
}

console.log(substringArray('Hello'))
console.log(longestSubstringOf('Hello'))

console.log(longestSubstringOf("baacab")) //,3,"cab is the longest substring.")
console.log(longestSubstringOf("abcd")) //,4,"abcd is the longest substring.")
console.log(longestSubstringOf("hchzvfrkmlnozjk")) //,11,"chzvfrkmlno is the longest substring.")
console.log(longestSubstringOf("!@#$%^&^%$#@!")) //,7,"!@#$%^& is the longest substring.")