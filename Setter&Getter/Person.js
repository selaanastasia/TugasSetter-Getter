class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Setter & Getter for firstName
    set firstName(name) {
        if (!name) throw new Error("First Name cannot be empty");
        this._firstName = name;
    }

    get firstName() {
        return this._firstName;
    }

    // Setter & Getter for lastName
    set lastName(name) {
        if (!name) throw new Error("Last Name cannot be empty");
        this._lastName = name;
    }

    get lastName() {
        return this._lastName;
    }

    // Setter & Getter for age
    set age(value) {
        if (value <= 0) throw new Error("Age must be greater than zero");
        this._age = value;
    }

    get age() {
        return this._age;
    }

    showDetails() {
        console.log(`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`);
    }
}

// Instance
const person1 = new Person("Sela", "Anastasia", 25);
const person2 = new Person("Gaela", "Devanya", 30);

person1.showDetails(); // Output: Name: John Doe, Age: 25
person2.showDetails(); // Output: Name: Jane Smith, Age: 30