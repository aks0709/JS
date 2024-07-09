let score="33"

console.log(typeof(score))

let valueInNumber=Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

let score2="33abc"
let valueInNumber2=Number(score2)
console.log(typeof valueInNumber2)   //it still gives it type as number 
console.log(valueInNumber2) //but its value is Nan(Not a number)

//"33" => 33
//"33abc"  =>NaN
//"True" =>1  "False"=>0

//1=> true  0=> false
//""=>false   "someString"=>true

/*                                      Operations                      */
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(5/2)
console.log(4%2) 

let str1="HELLO"
let str2=" AYUSH"
let str3=str1+str2
console.log(str3)

//important
console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log(1+"2"+"2")
//depends on konsi value pehle aa rahi hai
console.log(1+2+"2")
console.log("1"+2+2)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4