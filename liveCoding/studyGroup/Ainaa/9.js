/*Given an array of n positive integers and a positive integer s, 

Original instruction: Find the minimal length of a continuous subarray of which the sum ≥ s. 
# If there isn't one, return 0 instead.

Reworded: Find the smallest subarray (return the length of the smallest subarray) from the subarrays from which the sum ≥ s. 
If there isn't one, return 0 instead.



console.log(minSubLength([2,3,1,2,4,3], 7)) 

P:
- input: an array and a number
- output: a number

rules:
- return the smallest length of sub array which the sum is greater or equal to the given number. 
- If there isn't one, return 0 instead.

E:
[2,3,1,2,4,3], 7
 2 -> 2
 2 3 - 5
 2 3 1 - 6
 2 3 1 2 - 7
 
 2
 23
 231
 2312
 23124
 231243
 3
 31
 312
 ... etc
 
 
 1, 2, 4
 
 minSubLength([1, 2, 3], 4) // What should the answer be? 
 
1, 2, 4], 8)

1 1
12 - 3
124 - 7
2 - 2
24 - 6
4 - 4
 
D
an array --> a number

A:

Big picture algorithm
- Get all the possible subarrays
- create an empty array
- iterate over the subarray
  - if the sum of the subarray >= input number push it to the new array
- find the smallest length from the new array
  - iterate over the array
  - replace the element with the length
  - find the min number from the array
- return the min number



- Find the sum of each sub array
- Filter (Find) all the subarrays whose sum is greater than (input number s)
  - why do you have to transform the subarray into sum when you filter it??? 
- Find the smallest length of the subarray (Return the length of the smallest sub array)

Detailed algorithm - step by step 
- temp length an init to 0
- iterate over the array to get the possible sub array
- in each iteration:
  - if the sum of the subarray is greater or equal to the given number
    -compare the length of the sub array with the temp
     - if the subarray length is less than the temp reassign the temp with the array length

- 
- count the sum of each of subarray
- filter the sum that is equal or greater than the input number
- 

 



*/

function minSubLength(array, num) {
  let subArr = [];
   
  for (let i = 0; i < array.length; i++) {
    for(let j = i + 1; j <= array.length; j++) {
     subArr.push(array.slice(i,j));   
    }       
  }
  
    let sumArr = [];
    
    for(let i = 0; i < subArr.length; i++) {
      if (subArr[i].reduce((acc, elem) => acc + elem, 0) >= num) {
         sumArr.push(subArr[i])
      };
    }
    
   let length = sumArr.map(subArr => subArr.length);
    
 
  return Math.min(...length) === Infinity ? 0 : Math.min(...length);
    
}

console.log(minSubLength([2,3,1,2,4,3], 7))  // == 2 
console.log(minSubLength([1, 10, 5, 2, 9], 9))  // == 1
console.log(minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280))  // == 4
console.log(minSubLength([1, 2, 4], 8)) // == 0
console.log(minSubLength([1, 2, 4, 4, 5, 6, 7, 8, 8], 10)) // == 2
console.log(minSubLength([1,2,4,3], 11))  // == 0


// What didn;t go well? 

- write simpler test cases and confirm with interviewer if you understand the question

- the jumping frmo your big algorithm into writing algorithm for the sake of writting algorithm 

- from the big algorithm, you're not sure how to break into small algorithm 


Algorithm 
- find all the subarrarys  (You already know how to do this)
- Find the sum of each sub array
- Filter (Find) all the subarrays whose sum is greater than (input number s) (Don't know what to do)
  - find all the sum of all the subarrays
  - based on the sum of all the sub arrays, filter the one where the sum is greater than num (saving the original array not the sum)                                                                       - 
                                                                              
- Find the smallest length of the subarray (Return the length of the smallest sub array)


function minSubLength(array, num) {
  let subArr = [];
   
  for (let i = 0; i < array.length; i++) {
    for(let j = i + 1; j <= array.length; j++) {
     subArr.push(array.slice(i,j));   
    }       
  }
  
  let filteredSum = []
  
  // sum all the subarrays 
  
  let sumArr = subArr.map(array => {
    // for each array sum the array and return the sum
    let sum = 0;
    for (let i = 0; i < length; i += 1) {
      sum += array[i];
    }
    return sum;
  })
  
  
  // iterate through all the sum of subarrays 
    //  if the sum is more than num 
    // save the original subarray 
  
  sumArr.forEach(array, index => {
    if (sum > num) {
      filteredSum.push(subArray[index]);
    }
  })
      
    
   let length = sumArr.map(subArr => subArr.length);
    
 
  return Math.min(...length) === Infinity ? 0 : Math.min(...length);
    
}

/*Given an array of n positive integers and a positive integer s, 

Original instruction: Find the minimal length of a continuous subarray of which the sum ≥ s. 
# If there isn't one, return 0 instead.

Reworded: Find the smallest subarray (return the length of the smallest subarray) from the subarrays from which the sum ≥ s. 
If there isn't one, return 0 instead.



console.log(minSubLength([2,3,1,2,4,3], 7)) 

P:
- input: an array and a number
- output: a number

rules:
- return the smallest length of sub array which the sum is greater or equal to the given number. 
- If there isn't one, return 0 instead.

E:
[2,3,1,2,4,3], 7
 2 -> 2
 2 3 - 5
 2 3 1 - 6
 2 3 1 2 - 7
 
 2
 23
 231
 2312
 23124
 231243
 3
 31
 312
 ... etc
 
 
 1, 2, 4
 
 minSubLength([1, 2, 3], 4) // What should the answer be? 
 
1, 2, 4], 8)

1 1
12 - 3
124 - 7
2 - 2
24 - 6
4 - 4
 
D
an array --> a number

A:

Big picture algorithm
- Get all the possible subarrays
- create an empty array
- iterate over the subarray
  - if the sum of the subarray >= input number push it to the new array
- find the smallest length from the new array
  - iterate over the array
  - replace the element with the length
  - find the min number from the array
- return the min number



- Find the sum of each sub array
- Filter (Find) all the subarrays whose sum is greater than (input number s)
  - why do you have to transform the subarray into sum when you filter it??? 
- Find the smallest length of the subarray (Return the length of the smallest sub array)

Detailed algorithm - step by step 
- temp length an init to 0
- iterate over the array to get the possible sub array
- in each iteration:
  - if the sum of the subarray is greater or equal to the given number
    -compare the length of the sub array with the temp
     - if the subarray length is less than the temp reassign the temp with the array length

- 
- count the sum of each of subarray
- filter the sum that is equal or greater than the input number
- 

 



*/

function minSubLength(array, num) {
  let subArr = [];
   
  for (let i = 0; i < array.length; i++) {
    for(let j = i + 1; j <= array.length; j++) {
     subArr.push(array.slice(i,j));   
    }       
  }
  
    let sumArr = [];
    
    for(let i = 0; i < subArr.length; i++) {
      if (subArr[i].reduce((acc, elem) => acc + elem, 0) >= num) {
         sumArr.push(subArr[i])
      };
    }
    
   let length = sumArr.map(subArr => subArr.length);
    
 
  return Math.min(...length) === Infinity ? 0 : Math.min(...length);
    
}

console.log(minSubLength([2,3,1,2,4,3], 7))  // == 2 
console.log(minSubLength([1, 10, 5, 2, 9], 9))  // == 1
console.log(minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280))  // == 4
console.log(minSubLength([1, 2, 4], 8)) // == 0
console.log(minSubLength([1, 2, 4, 4, 5, 6, 7, 8, 8], 10)) // == 2
console.log(minSubLength([1,2,4,3], 11))  // == 0


// What didn;t go well? 

- write simpler test cases and confirm with interviewer if you understand the question

- the jumping frmo your big algorithm into writing algorithm for the sake of writting algorithm 

- from the big algorithm, you're not sure how to break into small algorithm 


Algorithm 
- find all the subarrarys  (You already know how to do this)
- Find the sum of each sub array
- Filter (Find) all the subarrays whose sum is greater than (input number s) (Don't know what to do)
  - find all the sum of all the subarrays
  - based on the sum of all the sub arrays, filter the one where the sum is greater than num (saving the original array not the sum)                                                                       - 
                                                                              
- Find the smallest length of the subarray (Return the length of the smallest sub array)


function minSubLength(array, num) {
  let subArr = [];
   
  for (let i = 0; i < array.length; i++) {
    for(let j = i + 1; j <= array.length; j++) {
     subArr.push(array.slice(i,j));   
    }       
  }
  
  let filteredSum = []
  
  // sum all the subarrays 
  
  let sumArr = subArr.map(array => {
    // for each array sum the array and return the sum
    let sum = 0;
    for (let i = 0; i < length; i += 1) {
      sum += array[i];
    }
    return sum;
  })
  
  
  // iterate through all the sum of subarrays 
    //  if the sum is more than num 
    // save the original subarray 
  
  sumArr.forEach(array, index => {
    if (sum > num) {
      filteredSum.push(subArray[index]);
    }
  })
      
    
   let length = sumArr.map(subArr => subArr.length);
    
 
  return Math.min(...length) === Infinity ? 0 : Math.min(...length);
    
}

# Find the missing letter
# Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
#
# You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
#
# The array will always contain letters in only one case.
# Example:
#
const ALPHABETS = ['a', 'b'.....]
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz"
index +1 = that's the same location as the alphabet

you have to know what is the charCode for A, Z, a, z

# ['a','b','c','d','f'] -> 'e'
# ['O','Q','R','S'] -> 'P'
# Use the English alphabet with 26 letters.
p find_missing_letter(["a","b","c","d","f"]) == "e"
p find_missing_letter(["O","Q","R","S"]) == "P"
p find_missing_letter(["b","d"]) == "c"
p find_missing_letter(["a","b","d"]) == "c"
p find_missing_letter(["b","d","e"]) == "c"

/*Given an array of n positive integers and a positive integer s, 

Original instruction: Find the minimal length of a continuous subarray of which the sum ≥ s. 
# If there isn't one, return 0 instead.

Reworded: Find the smallest subarray (return the length of the smallest subarray) from the subarrays from which the sum ≥ s. 
If there isn't one, return 0 instead.



console.log(minSubLength([2,3,1,2,4,3], 7)) 

input: an array of number and a number
output: a number

rule:
- return the smalles length of the subarray which the sum  ≥ s, s is the given number
- if there is none return 0

E:
1 2 3, 8 --> 0
1 - 1
12 - 3
123 - 6
2
23 - 5
3

D:
arra --> number

A:
-find all the possible subarray
- find only the subarray that has sum greater or equal to the given number
- return the smallest length from the subarray

find all the possible subarray:
- create a'result and init to an empty array
- iterate over the array
- for each of the element
  - iterate over the rest of the element
  - in each iteration:
    - compute the sum of the subarray
    - if it's more or greater than the given number:
      - push it to the result array

find the smalles length from the subarray
- create a 'smalles2' and init to 100
- if the current length of the subarray is smaller than the 'smallest', reassign the 'smallest to the value of the current legnth of the subarray

return the smallest

*/

function minSubLength(array, num) {
  let subArr = [];
  
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 0; j <= array.length; j++) {
      let currSubArr = array.slice(i,j);
      //console.log(currSubArr)
      if(currSubArr.reduce((acc, ele) => acc + ele, 0) >= num) {
        subArr.push(currSubArr);
      };
    }
  }
  
  if (subArr.length === 0) return 0;
  
  let smallest = 100;
 
 for (let i = 0; i < subArr.length; i++) {
   if(subArr[i].length < smallest) {
     smallest =subArr[i].length
   }
 }
  return smallest;
}


console.log(minSubLength([2,3,1,2,4,3], 7))  // == 2 
console.log(minSubLength([1, 10, 5, 2, 9], 9))  // == 1
console.log(minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280))  // == 4
console.log(minSubLength([1, 2, 4], 8)) // == 0
console.log(minSubLength([1, 2, 4, 4, 5, 6, 7, 8, 8], 10)) // == 2
console.log(minSubLength([1,2,4,3], 11))  // == 0

/*

# Find the missing letter
# Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
#
# You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
#
# The array will always contain letters in only one case.
# Example:
#
const ALPHABETS = ['a', 'b'.....]
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz"
index +1 = that's the same location as the alphabet

you have to know what is the charCode for A, Z, a, z

# ['a','b','c','d','f'] -> 'e'
# ['O','Q','R','S'] -> 'P'
# Use the English alphabet with 26 letters.
p find_missing_letter(["a","b","c","d","f"]) == "e"
p find_missing_letter(["O","Q","R","S"]) == "P"
p find_missing_letter(["b","d"]) == "c"
p find_missing_letter(["a","b","d"]) == "c"
p find_missing_letter(["b","d","e"]) == "c"

input: an array of increasing letters
output: a string ( a missing letter in the array)

rules:
- the array will always valid
- one letter always missing
- the length of the arrays at least 2
- the array will always contain letters in only one case

E:
find_missing_letter(["a","b","c","d","f"]) == "e"

D :
array --> string

A:
- create an 'alpha' and init to string of 26 letter
- find the index of the first array element in lower case in the alpha
- create the 'missingChar' and init to ''
- iterate over the array:
- in each iteration:
  - check if the element of an array are the same as in the alpha index start form the firt index
  - if it's not the same reassign missingCHar to the curr char in the 'alpha'
  - stop the loop.

- check if it's lowercase or uppercase
  - if the first element in the input array in lower case is the same in the original array return the 'missingChar'
  - else return 'missingchar' in Uppercase

  
*/

function find_missing_letter(array) {
  const ALPHA = "abcdefghijklmnopqrstuvwxyz"
  let firstIdx = ALPHA.indexOf(array[0].toLowerCase());
  //console.log(firstIdx)
  
  let missingChar = '';
  
  for (let i = 0; i < array.length; i++) {
    //console.log(ALPHA[firstIdx + i])
    //console.log(array[i]);
    if(array[i].toLowerCase() !== ALPHA[firstIdx + i]) {
      missingChar = ALPHA[firstIdx + i];
      break;
    }
  }
 
  if (array[0].toLowerCase() === array[0]) {
    return missingChar;
  } else {
    return missingChar.toUpperCase();
  }
}

console.log(find_missing_letter(["a","b","c","d","f"]) == "e")
console.log(find_missing_letter(["O","Q","R","S"]) == "P")
console.log(find_missing_letter(["b","d"]) == "c")
console.log(find_missing_letter(["a","b","d"]) == "c")
console.log(find_missing_letter(["b","d","e"]) == "c")


// uppercase and lowercase lookup
/*
A:
- create 'ALPHA' and assign it to 26 char Alphabet in lower and uppercase
- find the index of the first element of the given array in the 'ALPHA' and assign it to 'firstIdx'

- iterate over the array
- in each iteration check:
  - if the  element in the array is not the same as the element in the ALPHA based on the 'firstIdx'
    - return the char

*/

function find_missing_letter1(array) {
  const ALPHA = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let firstIdx = ALPHA.indexOf(array[0]);
  
  for (let i = 0; i < array.length; i++) {
    if(array[i] !== ALPHA[firstIdx + i]) {
      return ALPHA[firstIdx + i];
    }
  }
}

console.log(find_missing_letter1(["a","b","c","d","f"]) == "e")
console.log(find_missing_letter1(["O","Q","R","S"]) == "P")
console.log(find_missing_letter1(["b","d"]) == "c")
console.log(find_missing_letter1(["a","b","d"]) == "c")
console.log(find_missing_letter1(["b","d","e"]) == "c")



