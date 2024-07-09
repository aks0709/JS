//this keyword holds th current context

const user={
    username : "AYUSH",
    price : "999",
    welcomeMessage : function(){
    console.log(`${this.username}, welcome to wesite`);
    console.log(this)  // outputs the context of object
  }
}
user.welcomeMessage()
user.username="SACHAN"
user.welcomeMessage()  // the  current context is changed hence 


console.log(this);   //here(node environment) it outputs {}  empty context but if run this browser engine then current context is changed
                      // it gives context related window object

// function one(){
//     console.log(this);
// }
//one()

// function one(){
//     const username="AYUSH";
//     console.log(this.username);  //gives undefined  
// }
// one()

// const one=function(){
//     const username="AYUSH";
//     console.log(this.username);
// }
// one()  //this also gives undefined

// const one = () => {
//     const username="AYUSH";
//     console.log(this.username);
// }
// one()


//basic syntax
// ()=>{}
// ()=>()
const fun =(num1,num2)=>{
return num1+num2
}
console.log(fun(2,3));

const fun2=(num1,num2)=>(num1+num2)  //when we use parenthesis we dont need to write return keyword
console.log(fun2(7,8));

const fun3=()=>({username : "AYUSH_K"})
console.log(fun3());
