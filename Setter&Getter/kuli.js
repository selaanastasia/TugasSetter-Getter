class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    // Setter & Getter for name
    set name(value) {
        if (typeof value !== "string") throw new Error("Name must be a string");
        this._name = value;
    }

    get name() {
        return this._name;
    }

    // Setter & Getter for salary
    set salary(value) {
        if (value <= 0) throw new Error("Salary must be greater than zero");
        this._salary = value;
    }

    get salary() {
        return this._salary;
    }

    hitungGajiTahunan() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    hitungGajiTahunan() {
        const gajiPokok = super.hitungGajiTahunan();
        const bonus = gajiPokok * 0.1;
        return gajiPokok + bonus;
    }
}

// Instance
const manager1 = new Manager("Alice", 5000, "IT");
const manager2 = new Manager("Bob", 6000, "HR");

console.log(`Gaji Tahunan Alice: $${manager1.hitungGajiTahunan()}`); // Output: Gaji Tahunan Alice: $66000
console.log(`Gaji Tahunan Bob: $${manager2.hitungGajiTahunan()}`);   // Output: Gaji Tahunan Bob: $79200