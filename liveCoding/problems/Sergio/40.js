/*For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.
The input string consists of lowercase latin letters.

Your function should return :

an array [t, k] (in Ruby and JavaScript)

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

*/
/*
PROBLEM
input: string
output: an array
      - a substring
      - number; the number of the substring repeated times to form the given string

rules/question:
- the subsstring should be the minimum length
- the number should be the maximum number
- The input string consists of lowercase

EXAMPLE
"ababab"
ab
3

DATA STRUCTURE
input: string

output: array

ALGORITHM
- iterate over the string
  - init 'substring' = extract the element from the string start from 0 to current index = 
  - init result = split the string based on the currsubstring
  - if the result converted to string is ''
    - return [substring, result.length - 1] 
- end iteration
- return input string
*/

function f(s) {
  for (let i = 0; i < s.length; i++) {
    let currSubstring = s.slice(0, i);
    let substring = s.split(currSubstring);
    if(substring.join('') === '') return [currSubstring,substring.length -1 ];
  }
  return s;
}

console.log(f("ababab"), ["ab", 3])
console.log(f("abcde"), ["abcde", 1])