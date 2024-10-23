//Class Book
class Book {
   constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
   }
   bookDetails(){
      return `${this.title} is written by ${this.author} in ${this.year}.`;
   }
}

//Subclass Book

class Ebook extends Book{
   constructor(title, author, year, price){
      super(title, author, year);
      this.price = price;
   } 
   bookDetails(){
      return `${this.title} is written by ${this.author} in ${this.year} price : ${this.price}.`;
   }
}

const myEbook = new Ebook('Bulan dan Bintang', 'Selachan8081', '2008', '1000');

console.log(myEbook.bookDetails());
console.info(myEbook);