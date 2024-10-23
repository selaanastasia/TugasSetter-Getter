class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Setter & Getter for title
    set title(value) {
        if (!value) throw new Error("Title cannot be empty");
        this._title = value;
    }

    get title() {
        return this._title;
    }

    bookDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
}

class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year);
        this.price = price;
    }

    // Setter & Getter for price
    set price(value) {
        if (typeof value !== "number") throw new Error("Price must be a number");
        this._price = value;
    }

    get price() {
        return this._price;
    }

    bookDetails() {
        return `${super.bookDetails()}, Price: $${this.price}`;
    }
}

// Instance
const ebook1 = new Ebook("JavaScript Guide", "John Doe", 2020, 15);
console.log(ebook1.bookDetails()); // Output: Title: JavaScript Guide, Author: John Doe, Year: 2020, Price: $15