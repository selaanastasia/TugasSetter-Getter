// function Person(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;

//     this.showDetails = function() {
//         console.log(`Hello, My Name is ${this.firstName}, I am ${this.age} years old`);
//     }
// }

// Person.prototype.sayBye = function(){
//     console.log(``);
// }

// const nabila = new Person("Nabila", "Belinda", "16");
// nabila.showDetails();


class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    showDetails(name){
        console.log(`Hello ${name}, My name is ${this.firstName}`);
    }
}

const Nabila = new Person("Nabila", "Belinda");
Nabila.showDetails(`Nisa`);
console.info(Nabila);