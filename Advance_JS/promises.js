//handle future events

//promise is an object

// const promiseOne=new Promise(function(resolve,reject){
// //DO Asyn task
// //DB calls,cryptography,network
// setTimeout(function(){
//     console.log("Asyn Task is Complete");  //after 1 sec it will be displayed in console
//     resolve()  //this resolve is connected to then method given below
// },1000)
// })  //promise take callback function which have two argument resolve nd reject // proimse either poora resolve hoga ya reject

// promiseOne.then(function(){  //then--deals with resolve of promise
//     console.log("PROMISE CONSUMED");  
// })

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("ASYNC TASK 2");
        resolve()
    },1000)
}).then(function(){
    console.log("ASYNC 2 RESOLVED");
})

// const promise3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"AYUSH",email:"ayush41@gmail.com"})
//     },1000)
// })
// promise3.then(function(user){
//     console.log(user);
//     console.log(user.email);
// })

// const promise4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if (!error) {
//             resolve({username:"AYUSH", Branch:"CSE6A"})
//         }else{
//             reject("ERROR : SOMEThING wenT WRONG")
//         }
//     })
// })

// promise4
// .then((user)=>{
// console.log(user);
// return user.username //this goes into next then ,in chain
// }).then((username)=>{   //we do chaining of then ,the return from above then comes here
// console.log(username);
// }).catch(function(error){
// console.log(error);
// }).finally(function(){
//     console.log("THIS WILL ALWAYS RUN");
// })

// const promise5=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"TITAN",TownHall : 15})
//         }else{
//             reject("JS WENT WRONG")
//         }
//     },1000)
// })
// console.log("USING ASYN AND AWAIT");  //but it does not handle error,we have to use try catch block
//  async function consumePromise5(){
// try{
//     const response =await promise5 
//     console.log(response);
// }catch(error){
//     console.log(error);
// }
// }

// consumePromise5()

// async function getAllUsers(){
//     try{
//      const response=await fetch('https://jsonplaceholder.typicode.com/users')
//      const data=await response.json()
//      console.log(data);
//     }catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

console.log("HELLLO WHY THIS IS PRINTED LATER");
//basically a promise
fetch('https://jsonplaceholder.typicode.com/users')
.then((Response)=>{
    return Response.json()
})//this returned data is passed to next 'then'
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))