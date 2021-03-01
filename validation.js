document.addEventListener('change', function () {
    const numero = document.querySelector('.numTarjeta');
    num = numero.value;
    console.log(num);
    validarTarjeta(num)
});

function validarTarjeta(valor) {
  if ( /\D/.test(valor)){
   alert("El numero de tarjeta no es valido.");
  } else {
   alert("La dirección de email " + valor + " es correcta.");
  }
}