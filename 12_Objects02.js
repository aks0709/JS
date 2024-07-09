
//singleTon object
const tinderUser = new Object()
//const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 console.log(tinderUser);

 //nesting og object is possible
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//we can access in this way
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//way to combine objects
// const obj3 = { obj1, obj2 }
//const obj3 = Object.assign(Source,target)
// for eg:- const obj3 = Object.assign({}, obj1, obj2, obj4)

//using spread 
const obj3 = {...obj1, ...obj2}
 console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

//users[1].email
// console.log(tinderUser);

 console.log(Object.keys(tinderUser));  //array of keys
 console.log(Object.values(tinderUser));  //array of values
//it returns in form of Array
 // console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//way to access information 
//1=>    course.courseInstructor  in this we have to write this every time 



//destructuring of objects
const {courseInstructor: instruc} = course   //in this in LHS we specify what value we need ,and in RHS we specify name of object
const {price: paisa} = course

//console.log(courseInstructor);
console.log(instruc);  //this is the name we give to courseinstructor
console.log(paisa);

//Json API structure

//{"STRING":"STRING"}


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
