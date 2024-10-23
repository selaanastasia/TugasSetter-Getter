class RekeningBank {
    static nomorRekeningSet = new Set(); // Static property untuk menyimpan nomor rekening unik

    constructor(nomorRekening, saldo = 0) {
        this.nomorRekening = nomorRekening;
        this.saldo = saldo;
    }

    // Setter & Getter for nomorRekening
    set nomorRekening(nomor) {
        if (!nomor) {
            throw new Error("Nomor Rekening tidak boleh kosong");
        }
        if (RekeningBank.nomorRekeningSet.has(nomor)) {
            throw new Error(`Nomor Rekening ${nomor} sudah digunakan`);
        }
        RekeningBank.nomorRekeningSet.add(nomor); // Simpan nomor rekening ke Set
        this._nomorRekening = nomor;
    }

    get nomorRekening() {
        return this._nomorRekening;
    }

    // Setter & Getter for saldo
    set saldo(value) {
        if (value < 0) {
            throw new Error("Saldo tidak boleh negatif");
        }
        this._saldo = value;
    }

    get saldo() {
        return this._saldo;
    }

    setorUang(jumlah) {
        this.saldo += jumlah;
        console.log(`Setor uang: ${jumlah}, Saldo sekarang: ${this.saldo}`);
    }

    tarikUang(jumlah) {
        if (jumlah > this.saldo) {
            console.log("Saldo tidak mencukupi");
        } else {
            this.saldo -= jumlah;
            console.log(`Tarik uang: ${jumlah}, Saldo sekarang: ${this.saldo}`);
        }
    }
}

// Instance
try {
    const rekening1 = new RekeningBank("123567");
    const rekening2 = new RekeningBank("654321");
    const rekening3 = new RekeningBank("123456"); // Akan gagal karena duplikat
} catch (error) {
    console.error(error.message); // Output: Nomor Rekening 123456 sudah digunakan
}

const rekening4 = new RekeningBank("789012");
rekening4.setorUang(5000); // Output: Setor uang: 5000, Saldo sekarang: 5000
rekening4.tarikUang(2000); // Output: Tarik uang: 2000, Saldo sekarang: 3000