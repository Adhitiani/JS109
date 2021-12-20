//Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let str = 'launch school tech & talk'

function capitalizes(str) {
  let words = str.split(' ');
  let capArr = [];
  
  words.forEach(word => {
    word = word[0].toUpperCase() + word.slice(1)
    console.log(word);
    capArr.push(word);
  })

  return capArr.join(' ');

}

console.log(capitalizes(str))