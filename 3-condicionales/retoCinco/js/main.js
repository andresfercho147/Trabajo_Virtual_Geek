'use strict'
const  activSection=document.querySelector('#item');

if (activSection.classList.contains('sucess') ){
    activSection.innerHTML=`<h1>CORRECTO</h1><p>Los datos son correctos</p>`
} else if (activSection.classList.contains('error') ){
    activSection.innerHTML=`<h1>ERROR</h1><p>Ha surgido un error</p>`
}else{
    activSection.innerHTML=`<h1>AVISO</h1><p>Tenga cuidado</p>`
}

    
