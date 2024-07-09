function add(){
    let a=4
    let b=5
    console.log(a+b)
}

function add2(num1,num2){
    console.log(num1+num2);
}

function add3(num1,num2){
   return num1+num2
}
add()
add2(4,6)
const res=add3(5,6)
console.log(`THE RESULT IS ${res}`);

function loginUser(name){
    if(name==undefined)
        console.log("PLEASE ENTER USERNAME");
    else
    return `the user ${name} just logged in`
}

const user=loginUser("AYUSh")
console.log(user);


//REST OPERATOR
function shoppingCart(...num){
    return num
}

console.log(shoppingCart(10,20,30,40));

function shoppingCart2(val1,val2,...num){
    return num
}
console.log(shoppingCart2(10,20,30,40));

const obj={
 username : "AYUSH",
 price : "999"
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price of object is ${anyobject.price}`)
}

handleObject(obj)
handleObject({username : "HOMLANDAer" , price : "000"})