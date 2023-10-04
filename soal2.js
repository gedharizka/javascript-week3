const prompt = require('prompt-sync')({sigint: true});
const productBin = require('./productBin.json');

const inputProductCode = prompt('Masukkan productCode: ');

const sumQuantityByStorageId=(data, productCode)=>{
    let totalQuantity = 0;
    for (const item of data) {
      if (item.productCode  === productCode) {
        totalQuantity += item.quantity;
      }
    }
  
    return totalQuantity;
}

const totalQuantity = sumQuantityByStorageId(productBin.data, inputProductCode);

console.log(`Total quantity untuk produk dengan ID ${inputProductCode}: ${totalQuantity}`);