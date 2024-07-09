const name="AYUSH"
const branch="CSE 6A"
const year=4
//console.log("MY NAME IS "+ name + "MY BRANCH IS " + branch +"MY YEAR IS"+ year)
//standard way
console.log(`HELLO MY NAME IS ${name} name my BRANCH IS ${branch} and my year is ${year}`)


const str=new String('AyushKumar')
//Object of String is created 
/*
0-A
1-Y
......
9-R 
*/
console.log(str.length);
console.log(str.charAt(4))
console.log(str.indexOf('U'));
console.log(str.toUpperCase().indexOf('U'))
console.log(str.toUpperCase())
console.log(str);  //strings are immutable

const stri="AYUSH"
console.log(stri.substring(0,3))
console.log(stri.slice(-8,3))
const string="      AYUSH  "
console.log(string)
console.log(string.trim())   //trim the white spaces from start and end

const url="https://ayushkumar@%20gmail.com"
console.log(url.replace('%20','-'))
console.log(url.includes("ayush"))

const str2="AYUSH-KUMAR-SINGH"
console.log(str2.split('-'));