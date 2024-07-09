const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
 const boys=["Homelander","DEEP","A-TRAIN","ButCher","SOLDIERBOY"]
const all_new_heros = [...marvel_heros, ...dc_heros,...boys]  //in this way we can merge many arrays whereas in concat we only do for one array

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("AYUSH KUMAR"))
console.log(Array.from({name: "hitesh"})) // interesting for interview
//does not make array unless we didnt specify either we want to make array from keys or values

let score1 = 100
let score2 = false
let score3 = "AYUSH"

console.log(Array.of(score1, score2, score3));