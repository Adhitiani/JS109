/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

Problem:
input: a string
output: a string

rules:
- take out the 'http://' part
  - split by  '//'
  - extractt the second element of the array and assign it to 'cleanHttp'
- take out the .com part
  - split by '.com'
  - extract the first elmement and assing it to 'cleanCom'
- init domain with emtpy string  
- iteate over the string 'cleanCom'
  - in each iteration if the char is not w && . concatenated with the empty string
return domain;  
*/

function domainName1(url) {
  let cleanHttp;
  if(url.includes('http://') || url.includes('https://') ) {
     cleanHttp = url.split('//')[1];
     } else {
       cleanHttp = url;
     }
  
   let cleanWww;
   if(cleanHttp.includes('www.') ) {
      cleanWww = url.split('www.')[1];
     } else {
       cleanWww = cleanHttp;
     }
 return cleanWww.split('.')[0];

}

console.log(domainName("http://github.com/carbonfive/raygun") == "github" )
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
domainName("http://google.com") == "google";
domainName("http://google.co.jp") == "google";
domainName("www.xakep.ru") == "xakep";
domainName("https://youtube.com") == "youtube";

function domainName(url) {
 url = url.replace('http://','');
 url = url.replace('https://','');
 url = url.replace('www.','');
  
 return url.split('.')[0]; 
}