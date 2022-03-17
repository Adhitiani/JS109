/*In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules

 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// create a new array with the length of the string elngth
// fill it with the string
// iterate over the new array
   - for each of element
      - turn it into an array
      - change the element in the curr index to uppercase
      - convert back to string
      - replace the element with the string
// end. iteraton
// return the array

describe("Tests", () => {
  it("test", () => {
result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
Test.assertDeepEquals(wave("hello"),result, "Should return: '"+result+"'");

result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
Test.assertDeepEquals(wave("codewars"), result, "Should return: '"+result+"'");

result = [];
Test.assertDeepEquals(wave(""), result, "Should return: '"+result+"'");

result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
Test.assertDeepEquals(wave("two words"), result, "Should return: '"+result+"'");

result = [" Gap ", " gAp ", " gaP "];
Test.assertDeepEquals(wave(" gap "), result, "Should return: '"+result+"'");
  });
});

*/

function wave(str) {
  let arr = [];
  
  for (let i = 0; i < str.length; i++) {
    let arrChar = str.split('');
    if(arrChar[i] === ' ') continue;
    arrChar[i] = arrChar[i].toUpperCase();
    arr.push(arrChar.join(''))
  }
  return arr;
}

console.log(wave('Two words'))