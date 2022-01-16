/*



[Train: Return substring instance count \| Codewars](https://www.codewars.com/kata/5168b125faced29f66000005/train/ruby)
7 kyu
Return substring instance count
Complete the solution so that it returns the number of times the search_text is found within the full_text.



input: a string, a substring
output: a number (the numbers of time that the substring found in the string)
substring? all substring from the string

EXAMPLE:
abbc --> a ab abb abbc
         b bb bbc
         b bc
         c
DATA STRUCTURE
input: a string , a string
output: number

ALgorithm:
1. create a counter for the result
   counter = 0
2. create an empty array to hold the substring
[]

3. get all the possible substring from the string:
  iterate over the string, for each of character:
   - iterate over the characters infront of it. for each iteration:
   - create temp string and initialized it to an empty string
   ''
   - slice the character start from the first character and concatenate with the temp  string
   - push the temp string to the array
   - increment to the next character. 
   
 4. iterate over the array of substring. in each iteration:
    - check if the current substring is equal to the search-substring
      - if it's equal, increment the counter by 1
 5. return the counter.     
   
The question is are you using firstindex and secondindex 

OR

firstindex and lengthOfSubstring

when startIndex = 0, length = ???? 
when startIndex = 1, length = ???? 
when startIndex = 3, length = ???? 

Option 1 : Index + length combination
a        ab     abb     abbc
(0, 1)  (0, 2)  (0, 3)  (0, 4) = index of a = 0, length is 1, 2, 3, 4

when startIndex = 0, length = 1, 2, 3, 4 incremented by 1

round 1 = start = 0, then length = 1, (j = start + 1)
round 2 = start = 0, then length = 2, (j ++
round 2 = start = 0, then length = 3,
round 2 = start = 0, then length = 4,

(string length)4 - (index)0


b       bb bbc
(1, 2)  (1, 3)  (1, 4)  

when startIndex = 1, length = 1, 2, 3 incremened by 1

round 1 = start = 1, then length = 2,
round 2 = start = 1, then length = 3,
round 3 = start = 1, then length = 4,

(string length)4 - (index=)1

b       bc
(2, 3)  (2, 4)

when startIndex = 2, length = 1, 2 incremented by 1

round 1 = start = 2, then length = 3,
round 2 = start = 2, then length = 4,

4 - 2

c
(3, 4)

when startIndex = 3, length = 1 , just 1

round 1 = start = 3, then length = 4 (j = i + 1),


first, create a leading substring method

then, you create an all substring method using the leading substring method


*/

//abbc

//for the first iteration, length must be 1 - 4

// function substring(string) {
//   let result = [];
  
//   for (let index1 = 0; index1 < string.length; index1 ++) {
//     for (let index2 = 1; index2 <= (string.length - index1); index2 ++) {
//         let substring = string.slice(index1, index1 + index2);
//       result.push(substring);
//     }
// }
//   return result

// };

// console.log(substrings('abbc'));

// ///

// function substrings(string) {
//   let returnArray = [];
//   for (let i = 0; i < string.length; i += 1) {
//     for (let 

// 1; j <= string.length ; j += 1) {
//       returnArray.push(string.slice(i, j));
//     }
//   }

//   return returnArray;
// }

//console.log(solution('aa_bb_cc_dd_bb_e', 'bb')); // should return 2 since bb shows up twice
// console.log(solution('aaabbbcccc', 'bbb')); // should return 1

// console.log(solution('abcdeb','b')); // == 2
// console.log(solution('abcdeb', 'a')); // == 1
// console.log(solution('abbc', 'bb')); // == 1


// LOOP practice

// let loops = 4

//   for (let i = 1; i <= loops; i += 1) {
//     for (let j = 1; j <= 2 ; j += 1) {
//       console.log(`i: ${i}, j: ${j}`);
//     }
//   }

// What do you think is going to happen?

// The simplest - i and j start at 0 

// How many loops would I have ? 

// 3 loops

// for each loop, then I have an inner loop 
//   3 * 3  = 9

// 4 loops ? 

// 4 * 4 = 16

// 4 * 2 = 8
   

// a ab abb abbc
// b bb bbc
// b bc
// c

// at least outer loop 4 * 

// inner loop - is decreasing (4 + 3 + 2 + 1)

// Practice problem 

// For 3 outer loops, I want 4 inner loops = total 12 loops


  // for (let i = 1; i <= 3; i += 1) {
  //   for (let j = 1; j <=  4; j += 1) {
  //     console.log(`i: ${i}, j: ${j}`);
  //   }
  // }

// For 7 outer loops, I want 2 inner loops 

  // for (let i = 1; i <= 7; i += 1) {
  //   for (let j = 1; j <= 2; j += 1) {
  //     console.log(`i: ${i}, j: ${j}`);
  //   }
  // }

// How do you use the first loop to influence the second loop

  // for (let i = 1; i <= 7; i += 1) {
  //   console.log(`india: ${i}`);
  //   for (let j = i; j <= 2; j += 1) {
  //     console.log(`jaguar: ${j}`);
  //   }
  // }





// For 4 outer loop, I want decresing amount of loops (4 + 3 + 2 + 1)

  // for (let i = 0; i <= 4; i += 1) {
  //   for (let j = i + 1; j <= 4; j += 1) {
  //     console.log(`i: ${i}, j: ${j}`);
  //   }
  // }

// For 4 outer loop, I want increasing amount of loops (1 + 2 + 3 + 4)


  for (let i = 0; i <= 4; i += 1) {
    console.log(i);
    for (let j = 1 ; j <= i; j += 1) {
      console.log(`i: ${i}, j: ${j}`);
    }
    console.log('test')
  }

// count th enumber of loops you need


