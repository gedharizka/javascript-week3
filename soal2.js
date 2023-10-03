const prompt = require('prompt-sync')({sigint: true});
const productBin = require('./productBin.json');

const inputProductId = prompt('Masukkan ProductId: ');

const sumQuantityByStorageId=(data, productId)=>{
    let totalQuantity = 0;
    for (const item of data) {
      if (item.productId === Number(productId)) {
        totalQuantity += item.quantity;
      }
    }
  
    return totalQuantity;
}

const totalQuantity = sumQuantityByStorageId(productBin.data, inputProductId);

console.log(`Total quantity untuk produk dengan ID ${inputProductId}: ${totalQuantity}`);