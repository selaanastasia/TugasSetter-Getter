//Class product
class Product{
    constructor(idProduk, name, price){
        this.idProduk = idProduk;
        this.name = name;
        this.price = price;
    }
    hitungTotalHarga(kuantitas){
        return this.price * kuantitas;
    }
    tampilkanNama(){
        console.info(`Nama Produk: ${this.name}`);
    }
}

//Subclass Elektronik Produk

class ElektronikProduk extends Product{
    constructor(idProduk, name, price, masaGaransi){
        super(idProduk, name, price);
        this.masaGaransi = masaGaransi;
    }
    hitungTotalHarga(kuantitas){
        const totalHarga = super.hitungTotalHarga(kuantitas);
        console.info(`Masa Garansi: ${this.masaGaransi} tahun`);
        return totalHarga;
    }
    tampilkanNama(){
        super.tampilkanNama();
        console.info(`Masa Garansi: ${this.masaGaransi} Tahun`);
    }
}

const laptop = new ElektronikProduk('101', 'Laptop', '1jt', '2');
laptop.tampilkanNama();

const totalHarga = laptop.hitungTotalHarga(3);
console.info(`Total Harga untuk 3 Laptop: Rp ${totalHarga}`);