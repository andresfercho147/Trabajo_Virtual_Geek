var number =11;

number=parseInt(prompt("Ingrese un número: "));

if (number === 0) {
    console.log('El número es 0')
  } else if (number < 0) {
    console.log('El número es negativo')
  } else if (number + 2 > 13 && number < 20) {
    console.log('El número más 2 es mayor a 13')
  } else if (number < 50 && number >20) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else {
    console.log('el número no es 123123125')
  }


