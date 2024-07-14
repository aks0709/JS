const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//to iterate objects we use for in loop
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);     //key, myObject[key]
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


//**MAP ARE NOT ITERABLE BY FOR IN LOOP */
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
//     console.log("HEY");
// }
