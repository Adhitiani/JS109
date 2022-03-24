/*In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

*/

function removeDup1(word) {
  let singleChar = word[0];
  for (let i = 1; i < word.length; i += 1){
    let currChar = word[i];
    let prevChar = word[i- 1];

    if(prevChar !== currChar) singleChar += currChar;
  }
  return singleChar;
}

function dup(arr) {
  return arr.map(word => removeDup(word))
}

  console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
  console.log(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
  console.log(dup(["kelless","keenness"]), ['keles','kenes']);
  console.log(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
  console.log(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
  console.log(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
  console.log(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
  console.log(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);

  // using filter 
  function removeDup(word) {
    let arrChar = word.split('');
    return arrChar.filter((char, i, arr) => char !== arr[i + 1]).join('')
  }

  console.log(removeDup("ccooddddddewwwaaaaarrrrsssss"));