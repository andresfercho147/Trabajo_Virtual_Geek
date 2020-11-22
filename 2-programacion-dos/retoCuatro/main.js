'use strict';
// 128 - 2; // Se restan los 2€ que debe pagar Ana a toda la cuenta. Esto da 126

// 126 / 9; // Lo que da la resta anterior se divide entre las 9 personas. Esto da 14. Lo que quiere decir que cada persona debe pagar 14€

// 14 + 2; //esto es lo que tiene que pagar Ana

let pagoTotal = 128; //€

let pagoSinSake = pagoTotal - 2;

let pagoCadaPersona = pagoSinSake / 9;

let pagoAna = pagoCadaPersona + 2;

console.log(`Cada persona debe pagar: ${pagoCadaPersona} €`);
console.log(`Ana debe pagar: ${pagoAna} €`);

