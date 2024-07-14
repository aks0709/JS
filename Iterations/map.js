const myArr=[12,33,57,78,91,10]
//map function automatically return value
console.log(myArr);
const values=myArr.map((nums)=> nums+10)
console.log(values);

//we can apply multiple methods as well
const arrayValues=myArr.map((nums)=> nums+10)
                       .map((num)=> num+1)
                       .filter((num)=> num%2!=0)
console.log(arrayValues);