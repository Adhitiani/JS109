/*A long beep is represened by a dash (-) and a short beep by a dot (.). A series of long and short beeps make up a letter, and letters are separated by spaces ( ). Words are separated by double spaces.

You should implement the International Morse Alphabet. You need to support letters a-z and digits 0-9 as follows:

a .-      h ....    o ---     u ..-      1 .----     6 -....
b -...    i ..      p .--.    v ...-     2 ..---     7 --...
c -.-.    j .---    q --.-    w .--      3 ...--     8 ---..
d -..     k -.-     r .-.     x -..-     4 ....-     9 ----.
e .       l .-..    s ...     y -.--     5 .....     0 -----
f ..-.    m --      t -       z --..
g --.     n -.
Examples

.... . .-.. .-.. ---  .-- --- .-. .-.. -..   → "hello world"
.---- ... -  .- -. -..  ..--- -. -..         → "1st and 2nd"

*/
/*
PROBLEM
input: string
output: string

rules/question:
- return the alphabet equalent to the given morse code
- A series of long and short beeps make up a letter, 
- letters are separated by spaces ( ). 
- Words are separated by double spaces.

EXAMPLE

DATA STRUCTURE
input: string
output: string

ALGORITHM
- create a lookup object / array
morse = {
'.-' : 'a' ,      .... : ''    '---' : '',     '..-' : ''      '.----' : '',    
'-...' : 'b'  ,   .. : ''      '.--.' : '',    '...-' : ''     '..---' : '',    
'-.-.' : 'c' ,   .--- : ''    '--.-' : '',    '.--' : ''      '...--' : '',    
'-..' : 'd' ,    -.- : ''     '.-.' : '',     '-..-' : ''     '....-' : '',    
'.' :  'e',      .-.. : ''    '...' : '',     '-.--' : ''    '.....' : '',    
'..-.' : 'f' ,   -- : ''      '-' : '',       '--..' : ''
'--.' : 'g' ,    -. : ''
}
- iterate over the input string
- end iteration

*/

function decode(str) {
  let morse = {
    '.-' : 'a',
    '-...' : 'b',
    '-.-.' : 'c',
    '-..' : 'd',
    '.' :  'e',
    '..-.' : 'f',
    '--.' : 'g',
    '....' : 'h' ,
    '..' : 'i', 
    '.---' : 'j',
    '-.-' : 'k',
    '.-..' : 'l',
    '--' : 'm',
    '-.' : 'n',
    '---' : 'o',
    '.--.' : 'p',
    '--.-' : 'q',
    '.-.' : 'r',
    '...' : 's',
    '-' : 't',
    '..-' : 'u',
    '...-' : 'v',
     '.--' : 'w',
    '-..-' : 'x',
    '-.--' : 'y',
    '--..' : 'z',
    '.----' : 1,
    '..---' : 2,
    '...--' : 3,
    '....-' : 4,
    '.....' : 5,
    '-....' : 6,
    ' --...' : 7,
    '---..' : 8,
    '----.' : 9,
    '-----' : 0,
    
  }
    let codes = str.split(' ');
    let letters = codes.map(code => {
      if(code === '') return ' ';
      return code = morse[code]
    }).join('');
    return letters
  }


decode('.... . .-.. .-.. ---  .-- --- .-. .-.. -..')