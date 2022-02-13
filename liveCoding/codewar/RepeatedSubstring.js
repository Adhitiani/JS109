/*For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

a tuple (t, k) (in Python)
an array [t, k] (in Ruby and JavaScript)
in C, return k and write to the string t passed in parameter
Example #1:

for string

s = "ababab";
the answer is

["ab", 3]
Example #2:

for string

s = "abcde"
the answer is

["abcde", 1]
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.

P:
input: a string
output: an array with two element
        - a substring
        - a number
rules:
- return the minimum substring and the number of the substring repeated so that the entire string is equal to the substring repeated that number of times

E:
ababab
a ab aba abab ababa ababab
b ba bab baba babab
a ab aba abab
b ba b
a ab
b

A:
- get all the possible substring
- split the string based on the substring
- count the length of the substring and assgin it to num
- check if the substring concatenated with the substring ' num' time is the same as the string
- if so return the substring and the num in the array

*/

function f(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 0; j <= str.length; j++) {
     let currSubStr = str.slice(i, j);
      let count = str.split(currSubStr).length - 1
      let newStr = currSubStr.repeat(count);
      if (newStr === str) return [currSubStr, count];
    }
  }
}

console.log(f("ababab"));
console.log(f("abcde"));


//

function f1(s) {
  const substrings = [];
  let substring = '';
  
  for (let index = 0; index < s.length; index += 1) {
    substring += s[index];
    substrings.push(substring);
  }
  
  console.log(substrings);
  
  for (let index = 0; index < substring.length; index += 1) {
    const str = substrings[index];
    const count = s.length / str.length;
    
    if (str.repeat(count) === s) {
      return [str, count];
    }
  }
}

console.log(f1("ababab"));
console.log(f1("abcde"));