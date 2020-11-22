'use strict'

let edad=34//document.querySelector(".form"); 
let diasPorAño = 365;
let horasPorDia = 24;

// document.getElementById("form").onsubmit = function() {myFunction()};

let horasTotalVividas = edad * diasPorAño * horasPorDia;

console.log(`"Durante sus ${edad} años usted ha vivido ${horasTotalVividas} horas"`);