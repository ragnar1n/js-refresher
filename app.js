const numbers=[1,2,3]

const [a,,b]=numbers

console.log(b)

const person={
    n:'peep',
    age:23
}

const {n}=person
const {age}=person

const printName=({n})=>console.log(n)

printName(person)