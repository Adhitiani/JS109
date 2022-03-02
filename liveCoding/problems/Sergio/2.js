/*Complete the solution so that it returns the number of times the search_text is found within the full_text.

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

p:
input: a string
output: a string

A:
- split the string to an array of characters with the search string as the separator
- count the separator which is the lengh of the array - 1

- init count = 0
- init temp = ''
- iterate over the string
- concatenated the temp string to the char
- if the temp string contain the serach string
  - increment count by 1
  - reassign temp to ''
- end of iteration
- return count
*/

function solution1(str, searchStr) {
  return str.split(searchStr).length -1
};

console.log(solution('aa_bb_cc_dd_bb_e', 'bb'))
console.log(solution('aaabbbcccc', 'bbb'))
console.log(solution('aaabbbcccc', 'ccc'))

function solution(str, searchStr) {
  let count = 0;
  let temp = '';
  
  for (let i = 0; i < str.length; i++) {
    temp += str[i];
    if(temp.includes(searchStr)) {
      count += 1;
      temp = ''
    }
  }
  return count;
}