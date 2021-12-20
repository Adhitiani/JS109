//Write a function that returns the last element of an input array. For example:

function last(arr){
  //return arr[arr.length - 1];
  return arr.pop()
};

console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'