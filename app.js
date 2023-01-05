//let const

let num =5

//array
const numbers=[1,6,7,12]

//objekt
const person={
    name:'Mart',
    age:25
}

// numbers[2]=5

console.log(numbers.length)

numbers.forEach(function (number,index){
    console.log(`${number} - element indeksiga ${index}`)
})

numbers.forEach((number,index)=>{
    console.log(`${number} - element indeksiga ${index}`)
})


//arrow functions
const mtply=(nm)=>{
    return num*nm
}
console.log(mtply(6))


// const callMe=(name)=>{
//     return name
// }

const callMe=name=>name

console.log(callMe('Anna'))


//import default
import human from "./person.js"

console.log(human)

//import by name
import {cleanOutput as clean, data} from "./utils.js";

clean()
console.log(data)