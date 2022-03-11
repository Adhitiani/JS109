// Nearest Chapter
// Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

// equal distance

// Examples


/*
P:
input: an object and number
- the key is the chapter
- the value is the page
- the number is the page I'm on
output: string
- the chapetr that is nearest to the page you are on

rules:
- if two chapters are equal in distance return the chapter with the higher page number
- 

Example:
{
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10)

["Chapter 1","Chapter 2"]

D:
object, number --> string
array?

A:\
Step 1
// compare the input number to the value of the object
   - init 'tempChap' to []
   - extract the keys of the input object
   - iterate over the keys
     - push the current key to the array
     - check if the value is greater than input number
       - break the iteration
   - end iteration
   
Step 2
// compute the difference between the value
  - take the last element and the second last element from 'tempChap'
  - ini 'chapter' = to the first element in the  'tempChap'
  - init the difference to diffrence between input number and the first element
    if the second element diffrence is less than 'chapter' = the second element
    if the they are equal then 'chapter' the second element
  - return the chapter
   
{
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)

'tempChap' = ["New Beginnings","Strange Developments","The End?",  "The True Ending"  ]

[The End?",  "The True Ending"  ]
chapter = The End?"
diffrence = 6

diffrence "The True Ending" = 140

if (the currentPage of the current chapter is smaller than the provided page, then push to the array)? 

Step 1
// compare the input number to the value of the object
   - init 'tempChap' to []
   - extract the keys of the input object
   - iterate over the keys
     - push the current key to the array
     - check if the value is greater than input number
       - break the iteration
   - end iteration
   
Step 2
// compute the difference between the value
  - take the last element and the second last element from 'tempChap'
  - ini 'chapter' = to the first element in the  'tempChap'
  - init the difference to diffrence between input number and the first element
    if the second element diffrence is less than 'chapter' = the second element
    if the they are equal then 'chapter' the second element
  - return the chapter

Mental model for the oslution
- find the 2 chapters that are in between the given chapter
- figure out which one is closer


*/

function nearestChapter(obj, num) {
  let tempChap = [];
  let chapters = Object.keys(obj);
  
  for (let i = 0; i < chapters.length; i++) {
    tempChap.push(chapters[i]);
    if (obj[chapters[i]] >= num) break; // you have to handler >=
  }
  
  let betweenChap = tempChap.slice(tempChap.length - 2);
  let chapter = betweenChap[0];
  let difference = num - obj[betweenChap[0]];
  
  if ((obj[betweenChap[1]] - num) < difference) {
     chapter = betweenChap[1];
  } else if ((obj[betweenChap[1]] - num) === difference) {
     chapter = betweenChap[1];
  }
                
  return chapter;
}

// 120 - you will defintely learn in 120
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 15)) // "Chapter 2"


console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)) // "The End?"


console.log(nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3)) // "Chapter 1b"