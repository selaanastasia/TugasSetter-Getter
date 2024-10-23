class bankAccount{
    constructor(nomorRekening, namaNasabah, saldo){
        this.nomorRekening = nomorRekening;
        this.namaNasabah = namaNasabah;
        this.saldo = saldo;
    }
    setor(jumlah){
        if (jumlah > 0){
        this.saldo += jumlah;
        console.log(`Berhasil menyetor Rp${jumlah}. Saldo saat ini: Rp ${this.saldo}.`);
    } else {
        console.log("Jumlah setoran harus lebih dari 0.");
    }
  }

  tarik(jumlah){
    if(jumlah > 0 && jumlah <= this.saldo){
        this.saldo -= jumlah;
        console.log(`Berhasil menarik Rp${jumlah}. Jumlah saldo saat ini : Rp${this.saldo}`);
    } else if (jumlah > this.saldo){
     console.log("Saldo tidak mencukupi");
    }else{
        console.log("Jumlah penarikan harus lebih");
    }
    }

    transfer(jumlah, akunTujuan){
        if(jumlah > 0 && jumlah <= this.saldo){
            this.saldo -= jumlah;
            akunTujuan.saldo += jumlah;
            console.log(`Berhasil mentransfer Rp${this.saldo} ke rekening ${akunTujuan.nomorRekening} (${akunTujuan.namaNasabah})`);
            console.log(`Saldo anda saat ini: Rp ${this.saldo}`);
        }else if(jumlah > this.saldo){
            console.log("Saldo tidak mencukupi untuk transfer");
        }else{
            console.log("Jumlah Transfer harus lebih dari 0");
        }
    }
    lihatSaldo(){
        console.log(`Saldo Rekening ${this.nomorRekening} (${this.namaNasabah}) Rp${this.saldo}`);
    }
  }
  const akun1 = new bankAccount ("001", "Nabila", "100000000000");
  const akun2 = new bankAccount ("002", "Siti", "10000000000");

  akun1.setor(50000);
  akun1.tarik(2000);
  akun1.transfer(10000000, akun2);

  akun2.lihatSaldo();
  akun1.lihatSaldo();

