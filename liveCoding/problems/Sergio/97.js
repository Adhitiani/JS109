function stringParse(string) {
  if(typeof string !== 'string') return "Please enter a valid string"
  if(string.length === 0) return '';
  let arr = [string[0]];
  for (let i = 1; i < string.length; i++) {
    let currChar = string[i];
    let prevChar = string[i - 1];

    if (currChar === prevChar) {
      arr[arr.length - 1] += currChar;
    } else {
      arr.push(currChar);
    }
  }
  let resultArr = arr.map(str => {
    if(str.length > 2) {
      return str.slice(0,2) + `[${str.slice(2)}]`
    } else {
      return str;
    }
  })
  return resultArr.join('');
}