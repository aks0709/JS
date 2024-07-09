//problem with var

var c=30
let a=4000
if(true){
   let a=40
   const b=20
   c=3   // or var c=30
   console.log("INNER a:- ",a);
}

console.log(a);  
 //console.log(b);  b not defined
console.log(c);  //but it print c=3 whereas value of c is 30 declared in line 3

function one(){
    const username="AYUsH"
    function two(){
        console.log(username);
    }
    two()
}
one()

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
console.log(addOne(5)) // gives no error function declared below and used above
function addOne(num){
    return num+1
}
//console.log(addTwo(5));   it gives error as function declared below using variable (fUNCTION HOASTIG)
const addTwo=function(num){
    return num+2
}
console.log(addTwo(5));
