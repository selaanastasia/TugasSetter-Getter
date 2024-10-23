class RekeningBank {
    constructor(nomorRekening, saldo) {
        this.nomorRekening = nomorRekening;
        this.saldo = saldo;
    }

    setorUang(jumlah) {
        this.saldo += jumlah;
        console.log(`Setor Uang: Rp${jumlah}. Saldo saat ini: Rp${this.saldo}`);
    }

    tarikUang(jumlah) {
        if (jumlah > this.saldo) {
            console.log(`Penarikan gagal Saldo tidak mencukupi.`);
        } else {
            this.saldo -= jumlah;
            console.log(`Tarik Uang: Rp${jumlah}. Saldo saat ini: Rp${this.saldo}`);
        }
    }

    tampilkanSaldo() {
        console.log(`Saldo saat ini: Rp${this.saldo}`);
    }
}

// Membuat 3 instance dari class RekeningBank
const rekening1 = new RekeningBank("1234567890", 500000);
const rekening2 = new RekeningBank("0987654321", 1000000);
const rekening3 = new RekeningBank("1122334455", 750000);

// Melakukan setoran dan penarikan pada rekening pertama
rekening1.setorUang(100000);  // Menambah saldo Rp100.000
rekening1.tarikUang(200000);  // Mengurangi saldo Rp200.000

// Melakukan setoran dan penarikan pada rekening kedua
rekening2.setorUang(250000);  // Menambah saldo Rp250.000
rekening2.tarikUang(500000);  // Mengurangi saldo Rp500.000

// Melakukan setoran dan penarikan pada rekening ketiga
rekening3.setorUang(300000);  // Menambah saldo Rp300.000
rekening3.tarikUang(100000);  // Mengurangi saldo Rp100.000

// Menampilkan saldo akhir dari ketiga rekening
console.log("Rekening 1:");
rekening1.tampilkanSaldo();  // Menampilkan saldo akhir rekening 1

console.log("Rekening 2:");
rekening2.tampilkanSaldo();  // Menampilkan saldo akhir rekening 2

console.log("Rekening 3:");
rekening3.tampilkanSaldo();  // Menampilkan saldo akhir rekening 3