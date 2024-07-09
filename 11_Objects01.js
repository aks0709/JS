// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "ayush",
    "full name": "AYUSH KUMAR",  //if key is in ""  then we cant access it by using . operator
     [mySym]: "mykey1", //for symbol we have to use sqaure brackets
    age: 18,
    location: "Jaipur",
    email: "ayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 console.log(JsUser.email)
 console.log(JsUser["email"])
 console.log(JsUser["full name"])  
console.log(JsUser[mySym])  //the only we to access symbol variable of object

JsUser.email = "ayush@chatgpt.com"  // in this way we can make changes in object
Object.freeze(JsUser)  //if we freeze the object then we cant make changes
JsUser.email = "hitesh@microsoft.com"
 console.log(JsUser);

 const JsUser2={
    name : "SACHAN",
    class :"CSE6A"
 }
JsUser2.greeting = function(){
    console.log("Hello JS user");
}
JsUser2.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser2.greeting());
console.log(JsUser2.greetingTwo());