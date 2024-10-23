class Product {
    constructor(idProduk, name, price) {
        this.idProduk = idProduk;
        this.name = name;
        this.price = price;
    }

    // Setter & Getter for name
    set name(value) {
        if (typeof value !== "string") throw new Error("Name must be a string");
        this._name = value;
    }
     
    get name() {
        return this._name;
    }

    // Setter & Getter for price
    set price(value) {
        if (typeof value !== "number") throw new Error("Price must be a number");
        this._price = value;
    }

    get price() {
        return this._price;
    }

    hitungTotalHarga(kuantitas) {
        return this.price * kuantitas;
    }
}

class ElectronicProduct extends Product {
    constructor(idProduk, name, price, masaGaransi) {
        super(idProduk, name, price);
        this.masaGaransi = masaGaransi;
    }

    hitungTotalHarga(kuantitas) {
        return `${super.hitungTotalHarga(kuantitas)} USD, with ${this.masaGaransi} year(s) warranty`;
    }
}

// Instance
const electronicProduct1 = new ElectronicProduct(101, "Laptop", 1000, 2);
console.log(`Product: ${electronicProduct1.name}, Total: ${electronicProduct1.hitungTotalHarga(2)}`); 
// Output: Product: Laptop, Total: 2000 USD, with 2 year(s) warranty