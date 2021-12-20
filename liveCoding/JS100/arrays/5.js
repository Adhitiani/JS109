//Count the number of elements in scores that are 100 or above.


let scores = [96, 47, 113, 89, 100, 102];

let highScores = scores.filter(num => num >= 100);

console.log(highScores.length);

function countHundred(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] >= 100) count += 1;
  }

  return count;
}

console.log(countHundred(scores))