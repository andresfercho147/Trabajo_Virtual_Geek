'use strict'

const btn=document.querySelector('.send');
      btn.addEventListener('click', function(){
          const name=document.querySelector('#myname').value
          document.querySelector('h1').innerHTML=`Hola ${name}`
      })  





      

// function welcomeMessage () {

//     const nombre = document.getElementById('myname').value;
//     document.getElementById('message').innerHTML = "Hola " + nombre;
//     console.log("Hola " + nombre);
// }
