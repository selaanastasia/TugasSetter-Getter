class BankAccount {
    static accountSet = new Set(); // Static set to store unique account numbers and names

    constructor(nomorRekening, namaNasabah, saldo = 0) {
        this.nomorRekening = nomorRekening;
        this.namaNasabah = namaNasabah;
        this.saldo = saldo;
    }

    // Setter & Getter for nomorRekening
    set nomorRekening(value) {
        if (BankAccount.accountSet.has(value)) {
            throw new Error("Nomor Rekening must be unique");
        }
        this._nomorRekening = value;
        BankAccount.accountSet.add(value);
    }

    get nomorRekening() {
        return this._nomorRekening;
    }

    // Setter & Getter for namaNasabah
    set namaNasabah(value) {
        if (BankAccount.accountSet.has(value)) {
            throw new Error("Nama Nasabah must be unique");
        }
        this._namaNasabah = value;
        BankAccount.accountSet.add(value);
    }

    get namaNasabah() {
        return this._namaNasabah;
    }

    // Setter & Getter for saldo
    set saldo(value) {
        if (value < 0) throw new Error("Saldo tidak boleh negatif");
        this._saldo = value;
    }

    get saldo() {
        return this._saldo;
    }

    setor(jumlah) {
        this.saldo += jumlah;
        console.log(`${this.namaNasabah} setor: ${jumlah}, Saldo sekarang: ${this.saldo}`);
    }

    tarik(jumlah) {
        if (jumlah > this.saldo) {
            console.log("Saldo tidak mencukupi");
        } else {
            this.saldo -= jumlah;
            console.log(`${this.namaNasabah} tarik: ${jumlah}, Saldo sekarang: ${this.saldo}`);
        }
    }

    transfer(jumlah, tujuan) {
        if (jumlah > this.saldo) {
            console.log("Saldo tidak mencukupi untuk transfer");
        } else {
            this.saldo -= jumlah;
            tujuan.saldo += jumlah;
            console.log(`${this.namaNasabah} transfer ${jumlah} ke ${tujuan.namaNasabah}, Saldo sekarang: ${this.saldo}`);
            console.log(`${tujuan.namaNasabah} menerima transfer, Saldo sekarang: ${tujuan.saldo}`);
        }
    }
}

// Instances
const account1 = new BankAccount("001", "Alice", 5000);
const account2 = new BankAccount("002", "Bob", 3000);

account1.setor(2000); // Output: Alice setor: 2000, Saldo sekarang: 7000
account1.tarik(1000); // Output: Alice tarik: 1000, Saldo sekarang: 6000
account1.transfer(2000, account2); // Transfer dari Alice ke Bob