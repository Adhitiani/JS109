function duplicateCount(text){
  /*
  PROBLEM
  Input: a string
  output: number
  
  Rules:
  Explicit
  - return the count of characters that occur more than once in the string
  - the input contain only alphabets and numeric digit
  - the character is case insensitive 'b' and 'B' are equal
  
  EXAMPLE
  'aA11' --> 2
  
  DATA STRUCTURE
  string --> number
  
  ALGO
  1. create an empty object
  2. iterate over the string. in each iteration:
  check if the character in lower case is exist in the object
   - if it is increment the value
   - if it is not create a new key value pair, the key is the character, the value is 1
  3. Count how many values that is more than 1
       - create a result and initialized it to 0
       - check if the value is greater than 1
       - if it is increment the result by one
   4. return the result
  */
  
  let obj = {};
  for (let i = 0; i < text.length; i++) {
    let currentChar = text[i];
    
    if(obj[currentChar]){
      obj[currentChar] += 1;
    } else {
      obj[currentChar] = 1;
    };
  };
  let result = 0;
  for (let prop in obj) {
    if(obj[prop] > 1) result += 1;
  }
  
  return result;
};


console.log(duplicateCount(""))