/* Name Swapping

Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

PROBLEM:
input: a string (a first name, a space, a last name)
output: a string ( last name, a coma, a space, first name)

Examples:
Joe Roberts = Joe + ' ' + Roberts --> Roberts + ',' + ' ' + Joe

DATA STRUCTURE
input: string
Output: string
array?

ALGORITM:
1. split the string into an array consist of only words
2, return the string interpolation

Copy Code

 */

function swapName(name) {
  let arrName = name.split(' ');
  return `${arrName[1]}, ${arrName[0]}`;
};

console.log(swapName('Joe Roberts') == "Roberts, Joe");

/* Further Exploration

What if the person has one or more middle names? Refactor the current solution so that it can accommodate this; the middle names should be listed after the first name:

Copy Code */

function swapName2(name) {
  let arr = name.split(' ');
  let firstName = arr.pop();

 console.log(firstName + ',' + ' ' + arr.join(' '));


}
swapName2('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"