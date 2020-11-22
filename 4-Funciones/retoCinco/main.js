'use stict'

const valor=100
const iva=0.16 //16%
const compra= (valor, iva)=> {
    const result=(valor+(valor * iva));
    return  result 
}

const totalCompra=compra(100,0.16)
console.log(`El precio sin IVA es  ${valor} $, IVA: ${valor*iva} % y el total es ${totalCompra} $`);
