const arr=[1,2,3]  //reduce gives sub,sub,mul
const values=arr.reduce(function (accumulator,currVal){
    console.log(`accumulator=${accumulator} and currVal=${currVal}`)
return accumulator+currVal
},0)  //this zero is inital value for first iteration ,initally accumulator =initalValue after first iteration  accumulator replaced by value accumulator+currVal
//currval means curr data
console.log(values);

//using arrow function 
const val=arr.reduce((acc,curr)=>acc+curr,0)
console.log(val);

//multiply 
const mul=[1,2,3,4,5]
const value=mul.reduce((acc,val)=>acc*val,1)
console.log(value);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);