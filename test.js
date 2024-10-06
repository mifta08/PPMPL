const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Pengujian Fungsi Matematika', function () {
    it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', function () {
        expect(tambah(2, 2)).to.equal(4);
    });
    it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function () {
        expect(kali(2, 3)).to.equal(6);
    });
    it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function () {
        expect(kurang(2, 2)).to.equal(0);
    });
    it('seharusnya mengembalikan 2 saat membagi 6 / 3', function () {
        expect(bagi(6, 3)).to.equal(2);
    });
    
    // Negative case untuk fungsi tambah
    it('seharusnya mengembalikan NaN jika input adalah string, misalnya "2" + 2', function () {
        expect(tambah("2", 2)).to.be.NaN;
    });

    it('seharusnya mengembalikan NaN jika input adalah null, misalnya null + 2', function () {
        expect(tambah(null, 2)).to.be.NaN;
    });

    it('seharusnya mengembalikan NaN jika kedua input adalah string, misalnya "2" + "3"', function () {
        expect(tambah("2", "3")).to.be.NaN;
    });

    // Negative case untuk fungsi kali
    it('seharusnya mengembalikan NaN jika input adalah string, misalnya "2" * 2', function () {
        expect(kali("2", 2)).to.be.NaN;
    });

    it('seharusnya mengembalikan NaN jika input adalah null, misalnya null * 2', function () {
        expect(kali(null, 2)).to.be.NaN;
    });

    it('seharusnya mengembalikan NaN jika kedua input adalah string, misalnya "2" * "3"', function () {
        expect(kali("2", "3")).to.be.NaN;
    });


});
