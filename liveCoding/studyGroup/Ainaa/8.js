/*[Train: Mexican Wave \| Codewars](https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/ruby)
6 kyu

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
Rules
1.  The input string will always be lower case but maybe empty.
2.  If the character in the string is whitespace then pass over it as if it was an empty seat.

P:
input: a string
output: an array

rules:
- return an array of string, where the string has the uppercase letter
- the uppercase letter is moving one char in each string untill it reach the end of the char in the string.
- the input always a lower case or empty 
-  if the char is space pass it over to the next char

E:
"hello" --> [Hello, hEllo, heLlo, helLo, hellO]
"two words" --> [Two words, tWo words, twO words, two Words...., two wordS]

D:
string --> array

A:
- create a result and initialize it to an empty array
- do the loop as many as the characters // iterate over the char of the string
- in each loop:
  - check the curr char:
    - if it's a space, continue to the next iteration
    - if it's Not a space:
      - change the char in the string to upper case
        - convert the string to an array of char
        - replace the char in the current index position to Uppercase character
        - convert back to the string
        
      - push the new string to the result array
- return the array  
          
          
"hello"
[]
0 --> [H, e, l, l, o] --> Hello
[Hello]
1 --> [h, E, l, l, o] --> hEllo
[Hello, hEllo]

....

"two words"
[]
0 --> [T, w, o, , w, o, r, d, s] --> "Two words"
["Two words"]
1 --> [t, W, o, , w, o, r, d, s] --> "tWo words"
["Two words", "tWo words"]
2 --> [t, w O, , w, o, r, d, s] --> "twO words"
["Two words", "tWo words","twO words" ]
3 --> continue
4 ....

"two words"
["Two words", "tWo words", "twO words"]

*/

function wave(str) {
  let result = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    
    let arr = str.split('');
    arr[i] = arr[i].toUpperCase();
    result.push(arr.join(''));
  }
  
  return result;
}

console.log(wave("hello")) //  == ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("codewars")) //  == ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
console.log(wave("")) //  == []
console.log(wave("two words")) //  == ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(wave(" gap ")) // == [" Gap ", " gAp ", " gaP "]

