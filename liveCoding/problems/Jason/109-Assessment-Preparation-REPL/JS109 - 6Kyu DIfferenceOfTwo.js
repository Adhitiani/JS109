// https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript

/*
-> array
<- nested array
P:
- nested array will contain pairs of integers that have a difference of === 2 
  -- this is absolute difference
- returned array nested is a ascending order
  - based on the summed values of each ofthe nested arrays
- no duplicate ints
- scope: array of integers as inputs ONLY
- edge: consider [] ? 
E: 
// see kata
[1, 2, 3] -> [1, 3]

D: 
-> array
= number -- contains summed value for each subarray
= new nested array
<- return nested array

A:
= new subArry = []

- loop through each integer in the inputArray, assign current ind to i = 0
  - loop through each integer tin the inputArray, assign current ind to y = i + 1
    = set compareVal = Math.abs(inputArry at i - inputArry at y)
    - if (compareVal === 2)
      - need to sort 
      - [a, b] = [inputAry@i, inputAry@y].sort(a, b => a - b )
      - push to subArry <- [a, b]

- sort subArry
  - subArry.sort(a. b => sumofA(a) - sumofb(b);

return subArry;

function sumOfTwoElm(ary) {
  return ary@1 + ary@2
}
*/

function twosDifference(inputAry) {
  let subAry = [];
  for (let i = 0; i < inputAry.length; i += 1) {
    let iVal = inputAry[i];
    for (let y = i + 1; y < inputAry.length; y += 1) {
      let yVal = inputAry[y];
      let compareVal = Math.abs(iVal - yVal);
      if (compareVal === 2) {
        let [a, b] = [iVal, yVal].sort((a, b) => a - b);
        subAry.push([a, b]);
      }
    }
  }
  subAry.sort((a, b) => sumOf(a) - sumOf(b));
  return subAry;
}

function sumOf(ary) {
  return ary[0] + ary[1];
}

//console.log(twosDifference([1,2,3,4]));
//console.log(twosDifference([1,3,4,6]));


/*
Comments: 
1. sorting at first prevents the need for Math.abs and further sorting logic in following lines. Could have used sort at the very start of problem
2. I like the unique algo run, its getting really good.
  2.1 consider the use of forEach nested to prevent need of typing out for loops in full
    IE:
    function uniqueLog(ary) {
      for (let i = 0; i < ary.length; i += 1) {
        let iVal = ary[i]
        for (let y = i + 1; y < ary.length; y += 1) {
          let yVal = ary[y];
          console.log(ary[i] + '||' + ary[y]);
        }
      }
    }
    Instead: 
    function uniqueLog2(ary) {
      ary.forEach( (iElm, iInd) => {
        ary.slice(iInd + 1).forEach( (jElm, jInd) => {
          jInd += iInd + 1;
          console.log(iElm + '||' + jElm);
        });
      }); 
    }
3. The algo was too low level. We were getting hung up, better to just write 'sort in ascending order' or sort in 'descending order'
4. Would have benefitted if we knew how to sort in ascending and descending straight away
  - ascending: smallest to biggest
    - at sort ----> 'a - b'
  - descending: largest to smallest
    - at sort ----> 'b - a'
*/
