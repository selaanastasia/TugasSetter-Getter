// function PersegiPanjang(panjang, lebar){
//     this.panjang = panjang;
//     this.lebar = lebar;

//     // Menghitung luas
//     this.hitungLuas = function() {
//         console.log(`${this.panjang} * ${this.lebar} = ${this.panjang * this.lebar}`);
//     }

//     // Menghitung keliling
//     this.hitungKeliling = function() {
//         console.log(2 * (`${this.panjang} + ${this.lebar}) = ${2 * (this.panjang + this.lebar)}`));
//     }
// }

// // Membuat objek baru dengan nama persegi
// const persegi = new PersegiPanjang(5, 10);

// // Memanggil metode hitungLuas dan hitungKeliling
// persegi.hitungLuas();      // Output: 5 * 10 = 50
// persegi.hitungKeliling();  // Output: 2 * (5 + 10) = 30

class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = Number(panjang);  // Mengubah string menjadi angka
        this.lebar = Number(lebar);      // Mengubah string menjadi angka
    }
 
    hitungLuas(angka) {
        console.log( this.panjang * this.lebar);
    }

    hitungKeliling() {
        console.log( (2 * (this.panjang + this.lebar)));  // Formula keliling yang benar
    }
}

const persegi = new PersegiPanjang("10", "12");  // Nilai dikonversi dari string ke angka
persegi.hitungLuas();  // Output: Luas: 50
persegi.hitungKeliling();  // Output: Keliling: 30
console.info(persegi);  // Menampilkan instance objek persegi
