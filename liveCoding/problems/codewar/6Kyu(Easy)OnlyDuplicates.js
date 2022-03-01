// https://www.codewars.com/kata/5a1dc4baffe75f270200006b

/*
A:
- gets an input string
- hashmap the input string with keys being chars and vals being occurences
  - assign to simplObj
= tmpStr <- string
- iterate through keys of simplObj
  - In iteration, if val is 1, replace in master input string
  - tmpStr = replacedCharStr
- return tmpStr
*/

function onlyDuplicates(str) {
  let simplObj = {}
  for (let char of [...str]) {
    if (simplObj.hasOwnProperty(char)) {
      simplObj[char] += 1;
    } else {
      simplObj[char] = 1;
    }
  }
  console.log(simplObj)
  let objKeys  = Object.keys(simplObj);
  //console.log(objKeys)
  let tmpStr = str;
  for (let keys of objKeys) {
    let val = simplObj[keys];
    if (val !== 1) {
      continue;
    } else {
      tmpStr = tmpStr.replace(keys, '');
    }
  }
  return tmpStr;
}

console.log(onlyDuplicates('abccdefee')) // 'cceee'

// Edri done

/*Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

PROBLEM
input: a string
output: a string

rules:
Explicit
- remove charactes that are unique
- return only the char that appears more than one

ALGO
- create a 'result' and initialised it with an empty string
- iterate over the string
  - for each of character:
    - extract it from the string
    - reassign the string with the new value
    - chek if the extracted value includes in the new string
    - if it's concatenated with the result
- return the result string      

*/

function onlyDuplicates(str) {
  let result = '';
  let arr = str.split('');
  
  for (let i = 0; i < str.length; i++) {
    let currChar = arr.shift();
    if (arr.includes(currChar) || result.includes(currChar)) result += currChar;
  }
    
  return result;
}

console.log(onlyDuplicates("abccdefee"));

/*Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee" 


A:
- compute the accurance of each character in the string
  - create an empty object
  - iterate over the string
    - for each of character:
      - if it's exist in the object, increment its value by 1
      - if it's not exist add a new key value pair with the value assign to 1
      
- create an empty string
- iterate over the string
  - if the char accurance is more than one concatenated to the result string
return result string  
*/

function onlyDouble(str) {
  let obj = {};
  
  for (let i = 0; i < str.length; i++) {
    if(obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  //console.log(obj);
  
  let result = '';
  
  for(let i = 0; i < str.length; i++) {
    if(obj[str[i]] > 1) result += str[i];
  }
  
  return result;
}

console.log(onlyDouble("abccdefee"))

function onlySingle(str) {
  let obj = {};
  
  for (let i = 0; i < str.length; i++) {
    if(obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  //console.log(obj);
  
  let result = '';
  
  for(let i = 0; i < str.length; i++) {
    if(obj[str[i]] === 1) result += str[i];
  }
  
  return result;
}

console.log(onlySingle("abccdefee"))


