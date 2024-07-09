//no need to end statement with semicolons
const jerseyNo=18
let PlayerName="Virat Kohli"
var PlayerState="UttarPradesh"
PlayerFavFood="Chole Bhature"  //not recommended to use at all

console.log("INFORMATION ABOUT THE PLAYER")
//the difficulty with console.log is we have to write console.log for each field

console.table([jerseyNo,PlayerName,PlayerState,PlayerFavFood])

//the value of const never change ,gives error
//jerseyNo=7

//let and var both are used for variables
//but in var there is a scope problem so prefer to use "let"
PlayerName="THALA"
PlayerState="Chennai"
console.table([jerseyNo,PlayerName,PlayerState,PlayerFavFood])