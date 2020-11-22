const caja = (Boolean, ancho, padding) =>{
    if (Boolean===true) { //es content-box
        return ancho;
    } 
    else { //es border-box
        return padding
    }
}

let result=caja (false, 24, 44);
console.log(result)


