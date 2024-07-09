//primitives
//String ,number,bigInt,Boolean, undefined,null,symbol

//Non Primitives
//REFERNCE
//objects,functions,array
//js is dynamically typed since we dont have to specify datatypes

const id=Symbol('125')
const anotherID=Symbol('125')
console.log(id==anotherID);

const arr=["HULK","CA","TS"]

let myObject = {
    name: "AYUSH",
    age : 22,
}
console.log(myObject)
console.log(arr);

//++++++++++++++++++++++++++++++++++++++MEMORY++++++++++++++++++++++++++++++++++++++++
//Stack Memory (PRIMITIVES)
//Heap Memory(Non Primitives)
let name1="AYUSH"
let name2=name1
name2="SHIVANSH"
console.log(name1);
console.log(name2)
//in stack memory the copy of data is made and if changes are made to copy still original doesnt change

let obj={
    email : "ayush@kiet.edu",
    class : "CSE6A"
}


let obj2=obj
obj2.email="Sachan@kiet.edu"

console.log(obj.email)
console.log(obj2.email)

//in heap memory the reference of same object is stored ,in other words both obj and obj2 are refering to same object
 