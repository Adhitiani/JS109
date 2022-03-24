/*Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

- convert the string to an array of words
- init arrResult = [];
- init digit = '1234567890'
- find the number in each word
  - iterate over eachword
    - iterate over characters in word
      - if currChar is number 
        - add current word as anew element in index position of number - 1 to arrResult
    - end iteration
  - end iteration
- return the array in string form
*/

function order(str) {
  let arrWord = str.split(' ');
  let digit = '1234567890'
  let arrResult = arrWord.slice();

  arrWord.forEach(word => {
    for (let i = 0; i < word.length; i++) {
      if(digit.includes(word[i])) {
        arrResult[word[i] -1] = word;
      }
    }
  })
  return arrResult.join(' ')
}

console.log(order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est")
//console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
//console.log(order(""), "", "empty input should return empty string" )