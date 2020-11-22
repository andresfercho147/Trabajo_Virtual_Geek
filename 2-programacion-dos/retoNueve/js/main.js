const name='Andres Ceballos'
const withoutSpace=name.replace(' ','')//Retira espacios en Blanco
const result=document.querySelector('h3')
result.innerHTML=`El nombre de mi compañero es ${name} y está compuesto por ${withoutSpace.length} caracteres`