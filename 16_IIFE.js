//immediately invoted function expression
//when application starts these function execute immediately
//and also when we want that  global scope(variables) doesnot affect/pollute our function

// function one(){
// console.log("DB CONNECTED");
// }
// one()


(function one(){
    console.log("DB CONNECTED");
    })();    
    // first () is for immediate return second () if for return
    //we need to stop IIFE FUNCTION By USING ; ,,if we dont use it then it will result in error
    //; is used to stop the context
(function two(){
    console.log("DB2 CONNECTED");
    })();    

(()=>{console.log("HELLO DB")})();

((username)=>{
    console.log(`hello DB THE USER IS ${username}`)
})("MAYUR");