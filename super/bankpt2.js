// Mendefinisikan Class Bank
class Bank {
    constructor(namaBank) {
      this.namaBank = namaBank;
      this.kantorCabang = [];
    }
  
    // Method untuk menambahkan kantor cabang
    tambahKantorCabang(namaCabang) {
      this.kantorCabang.push(namaCabang);
      console.log(`${namaCabang} berhasil ditambahkan.`);
    }
  
    // Method untuk menghapus kantor cabang
    hapusKantorCabang(namaCabang) {
      const index = this.kantorCabang.indexOf(namaCabang);
      if (index !== -1) {
        this.kantorCabang.splice(index, 1);
        console.log(`${namaCabang} berhasil dihapus.`);
      } else {
        console.log(`${namaCabang} tidak ditemukan.`);
      }
    }
  
    // Method untuk menampilkan semua kantor cabang
    tampilkanKantorCabang() {
      if (this.kantorCabang.length > 0) {
        console.log(`Daftar kantor cabang untuk ${this.namaBank}:`);
        this.kantorCabang.forEach((cabang, index) => {
          console.log(`${index + 1}. ${cabang}`);
        });
      } else {
        console.log("Tidak ada kantor cabang yang terdaftar.");
      }
    }
  }
  
  // Membuat instance dari class Bank
  const bankA = new Bank("Bank Sejahtera");
  
  // Menjalankan method-method
  bankA.tambahKantorCabang("Cabang Jakarta");
  bankA.tambahKantorCabang("Cabang Surabaya");
  bankA.tambahKantorCabang("Cabang Bandung");
  
  bankA.tampilkanKantorCabang();
  
  bankA.hapusKantorCabang("Cabang Surabaya");
  
  bankA.tampilkanKantorCabang();
