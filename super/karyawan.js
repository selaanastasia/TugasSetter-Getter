class Employee{
    constructor(nama, gaji){
        this.nama = nama;
        this.gaji = gaji;
    }
    hitungGajiTahunan(){
        return this.gaji * 12;
    }
}

class Manager extends Employee {
    constructor(nama, gaji, departemen){
        super(nama, gaji)
        this.departemen = departemen;
    }

    hitungGajiTahunan(){
        const bonus = this.gaji * 0.10;
        return (this.gaji + bonus) * 12;
    }
}

const Manager1 = new Manager('Tiara', 15, 'IT');
const Manager2 = new Manager('Nabila', 5, 'Ngakak');
const Manager3 = new Manager('Nur', 1, 'Turu');

console.log(`${Manager1.nama} (Dept: ${Manager1.departemen}) Gaji Tahunan : $ ${Manager1.hitungGajiTahunan()}`);
console.log(`${Manager2.nama} (Dept: ${Manager2.departemen}) Gaji Tahunan : $ ${Manager2.hitungGajiTahunan()}`);
console.log(`${Manager3.nama} (Dept: ${Manager3.departemen}) Gaji Tahunan : $ ${Manager3.hitungGajiTahunan()}`);

