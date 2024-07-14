const coding = ["js", "ruby", "java", "python", "cpp"]

//we pass paramter in function that holds value of array

//function has no name
coding.forEach(function (val){
console.log(val);
})

//using arrow function
coding.forEach((item) => {
    console.log(item);
})

//we can also pass function as parameter
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)
//there are 3 parameters item-> current object ,index ->it's index -> whole arr
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )


//Array of Objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => { 
    console.log(item.languageName);
} )


