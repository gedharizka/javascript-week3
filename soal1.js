const prompt = require('prompt-sync')({sigint: true});


const input = prompt('Masukkan angka: ');
const angka = parseInt(input);

const checkInput = (angka) => {
    if (angka < 0) {
        console.log("Tidak bisa input bilangan negatif");
    } else if (angka % 2 !== 0) { // Periksa jika input ganjil
        console.log("Tidak bisa input bilangan ganjil");
    } else { // Jika input valid, hitung akar pangkat 2
        const akarPangkat2 = Math.sqrt(angka);
        console.log(`Akar pangkat 2 dari ${angka} adalah ${akarPangkat2}`);
    }
}

checkInput(angka);



