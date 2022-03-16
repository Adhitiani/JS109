/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/
// iterate over the string
// - slice the string from curr index until it has length of 2
// - increment the index by 2
// - if the current substring length less than 2
    // concatenated it with c_
    // push it to a new array
// push the current substring to a new array    
// end iteraton
// return new array

function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    let currSubstring = str.slice(i, i+ 2);
    if (currSubstring.length < 2) {
      result.push(currSubstring + '_');
    } else {
      result.push(currSubstring)
    }
  }
  return result;
}

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);