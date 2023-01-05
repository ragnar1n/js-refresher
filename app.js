class Human{
    // constructor() {
    //     this.gender='male'
    // }

    gender='male'

    printGender(){
        console.log(this.gender)
    }

}

class Person extends Human{
    constructor() {
        super()
        this.name='kevina'
        this.gender='female'
    }

    printName(){
        console.log(this.name)
    }

}

const person=new Person()
person.printName()
person.printGender()