/* The End Is Near But Not Here

Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

Examples:

Copy Code */
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

function penultimate(str) {
  let words = str.split(' ');
  // return words.slice(words.length - 2, words.length -1).join();
  if(words.length % 2 === 0) {
    return words[(words.length / 2) - 1] + ' ' + words[words.length / 2];
  } else {
    return words[Math.floor(words.length/2)];
  };
   

};

console.log(penultimate("Launch School is great!"));