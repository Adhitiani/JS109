/*Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

rules:
- count the number section repeating the same word
- case insensitive
- the occurance of two or more equal words next to each other count as one

"dog cat"                  -->  0
"dog DOG cat"              -->  1
"apple dog cat"            -->  0
"pineapple apple dog cat"  -->  0
"apple apple dog cat"      -->  1
"apple dog apple dog cat"  -->  0
"dog dog DOG dog dog dog"  -->  1
"dog dog dog dog cat cat"  -->  2
"cat cat dog dog cat cat"  -->  3

A:
// convert the string to lowercase
//convert the string to an array of word; 'arrWords'
- init repeatNumber = 0
- init count = 0
- iterate over 'arrWords'
  - if the current word is the same as the next word
    - count = 1
  - else
    - repeat Number += count
    - count = 0  
- end iteration
- return repeatNumber
*/
function countAdjacentPairs(str) {
  let arrWords = str.toLowerCase().split(' ');
  let repeatNumber = 0;
  let count = 0;
  for (let i = 0; i < arrWords.length; i++) {
    if(arrWords[i] === arrWords[i + 1]) {
      count = 1;
    } else {
      repeatNumber += count;
      count = 0;
    }
  }
  return repeatNumber;
}

console.log(countAdjacentPairs('')) //, 0, 'An empty string should return 0.')
console.log(countAdjacentPairs('orange Orange kiwi pineapple apple')) //, 1, "Case should be ignored. countAdjacentPairs('orange Orange kiwi pineapple apple')")
console.log(countAdjacentPairs('banana banana banana'))//, 1, "Once a word has been paired, it is ignored. countAdjacentPairs('banana banana banana')")
console.log(countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')) //, 2, "Once a word has been paired, it is ignored. Grab all pairs. countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')")
console.log(countAdjacentPairs('pineapple apple')) //, 0, "A pineapple is not an apple. countAdjacentPairs('pineapple apple')")