class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }

    // Setter & Getter for panjang
    set panjang(value) {
        if (value <= 0) throw new Error("Panjang must be greater than zero");
        this._panjang = value;
    }

    get panjang() {
        return this._panjang;
    }

    // Setter & Getter for lebar
    set lebar(value) {
        if (value <= 0) throw new Error("Lebar must be greater than zero");
        this._lebar = value;
    }

    get lebar() {
        return this._lebar;
    }

    hitungLuas() {
        return this.panjang * this.lebar;
    }

    hitungKeliling() {
        return 2 * (this.panjang + this.lebar);
    }
}

// Instance
const persegiPanjang1 = new PersegiPanjang(5, 3);
console.log("Luas:", persegiPanjang1.hitungLuas()); // Output: Luas: 15
console.log("Keliling:", persegiPanjang1.hitungKeliling()); // Output: Keliling: 16