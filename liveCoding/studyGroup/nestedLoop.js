let result = [];
let str = 'abc';

for (let i = 0; i < str.length; i++) {
  let substring = []
  for (let j = i + 1; j <= str.length; j++) {
    substring.push(str.slice(i,j));
  }
  result.push(substring);
};

console.log(result);

///
// pair str1 and str2 only on even index

// - iterate over the str1. for each of character:
    // - concatenate it only with the character in the even index position at str 2

let str1 = 'abc';
let str2 = 'xyz';

let result1 = [];

for (let i = 0; i < str1.length; i++) {
  for(let j = 0; j < str2.length; j += 2) {
    result1.push(str1[i] + str2[j]);
  };
};

console.log(result1);