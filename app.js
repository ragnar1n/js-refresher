const numbers=[1,2,3]

// numbers.push(4)
//
// console.log(numbers)

// const newNumbers=[...numbers,4]

const newNumbers=[...numbers,5]


console.log(newNumbers)

const filter=(...args)=>{
    return args.filter(el=>el===1)
}

console.log(filter(1,2,3,1))

const person={
    name:'k'
}

const newPe{
    ...person
    age:12
}


console.log(newPe)