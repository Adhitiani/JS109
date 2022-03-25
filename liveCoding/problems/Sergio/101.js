/*For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]

Algo:
- init longestChar = ''
- let longest = 0
- init tempStr = first char in the string
-iterate over the string, index start at 1
 - compare the current char with the prev char
   - if the same concatenated currChar with tempStr
   - else
     - compare the length of tempStr with the longest
       - if its greater than the longest --> 
          - longest = tempStr.length
          -  longestChar =  tempStr[0]
     - tempStr = current char      
- end iteration
return [longestChar, longest]
*/

function longestRepetition1(str) {
  let longestChar = '';
  let longestLength = 0;
  let tempStr = str[0];

  for (let i = 1; i <= str.length; i++) {
    let currentChar = str[i];
    let prevCar = str[i - 1];

    if(currentChar === prevCar) {
      tempStr += currentChar
    } else {
      if(tempStr.length > longestLength){
        longestLength = tempStr.length;
        longestChar = tempStr[0];
      }
      tempStr = currentChar;
    }
  }
  return [longestChar, longestLength]
}

console.log( longestRepetition("aaaabb"),      ["a",4] );
    console.log( longestRepetition("bbbaaabaaaa"), ["a",4] );
    console.log( longestRepetition("cbdeuuu900"),  ["u",3] );
    console.log( longestRepetition("abbbbb"),      ["b",5] );
    console.log( longestRepetition("aabb"),        ["a",2] );
    console.log( longestRepetition(""),            ["",0] );
    console.log( longestRepetition("ba"),          ["b",1] );

/// with array

    function longestRepetition(str) {
      if(str === '') return ["",0];
      let array = [str[0]];
    
      for (let i = 1; i <= str.length; i++) {
        let currentChar = str[i];
        let prevCar = str[i - 1];
    
        if(currentChar === prevCar) {
          array[array.length - 1] += currentChar
        } else {
          array.push(currentChar)
          } 
      }
       array.sort((a,b) => b.length - a.length)
       return[array[0][0], array[0].length]
    }