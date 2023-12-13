class Person {
    constructor(name,age,gender,nationality ){
        this.name = name
        this.age = age
        this.gender = gender
        this.nationality = nationality
    }
    introduce(){    
        return  `Hello, I'm ${this.name}, a ${this.age}-year-old ${this.gender} from ${this.nationality}. Nice to meet you!`;
    }
}

const instance1 = new Person("mohit", 21, "male", "indian")
const instance2 = new Person("varun", 35, "male", "indian")
const instance3 = new Person("ankit", 40, "male", "indian")

console.log(instance1.introduce())
console.log(instance2.introduce())
console.log(instance3.introduce())


// creating a inherited class
class Student extends Person{
    constructor(name, age, gender, nationality, subject){
       super(name, age, gender, nationality)
       this.subject = subject
    }
    study(){
        return  `Hello, I'm ${this.name}, a ${this.age}-year-old ${this.gender} from ${this.nationality}. I am Studying ${this.subject}`;
    }

    
}

const studentInst = new Student("rahul", 30,"male", "AU", "maths")

console.log(studentInst.study())