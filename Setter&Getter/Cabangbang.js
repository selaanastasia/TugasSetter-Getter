class Bank {
    constructor(namaBank) {
        this.namaBank = namaBank;
        this.kantorCabang = new Set();
    }

    // Setter & Getter for namaBank
    set namaBank(name) {
        if (!name) throw new Error("Nama Bank tidak boleh kosong");
        this._namaBank = name;
    }

    get namaBank() {
        return this._namaBank;
    }

    tambahKantorCabang(namaCabang) {
        if (this.kantorCabang.has(namaCabang)) {
            console.log(`Kantor cabang ${namaCabang} sudah ada`);
        } else {
            this.kantorCabang.add(namaCabang);
            console.log(`Kantor cabang ${namaCabang} berhasil ditambahkan`);
        }
    }

    hapusKantorCabang(namaCabang) {
        if (this.kantorCabang.has(namaCabang)) {
            this.kantorCabang.delete(namaCabang);
            console.log(`Kantor cabang ${namaCabang} berhasil dihapus`);
        } else {
            console.log("Kantor cabang tidak ditemukan");
        }
    }

    tampilkanKantorCabang() {
        console.log(`Kantor cabang di ${this.namaBank}:`);
        this.kantorCabang.forEach(cabang => console.log(cabang));
    }
}

// Instance
const bank1 = new Bank("Bank ABC");

bank1.tambahKantorCabang("Jakarta");
bank1.tambahKantorCabang("Bandung");
bank1.tambahKantorCabang("Surabaya");
bank1.tambahKantorCabang("Jakarta");
bank1.tampilkanKantorCabang();

bank1.hapusKantorCabang("Bandung");
bank1.tampilkanKantorCabang();