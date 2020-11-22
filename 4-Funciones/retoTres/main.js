'use strict'

// a = parseInt(prompt("Ingrese un número: "));
// b = parseInt(prompt("Ingrese otro número: "));
const valor=100
const iva=0.16 //16%
function compra (valor, iva) {
    const result=(valor+(valor * iva));
    return  result 
}

const totalCompra=compra(100,0.16)
console.log(`El precio sin IVA es  ${valor} $, IVA: ${valor*iva} % y el total es ${totalCompra} $`);

















// a = parseInt(prompt("Ingrese el valor de su compra: "));
// iva = 0.21; //21%
// function compra(a, iva) {

//     const result = (a + (a * iva));
//     return result;
// }

// const totalresult = compra(a, iva);

// console.log ("El precio sin IVA es: " + a + ", IVA: " + (a * iva) + " y total: " + totalresult);


