const multiplos = () => {
    for (let i = 1; i <= 100; i++) {
      if(i % 3 == 0 && i % 5 == 0) {
        console.log("Fizzbuzz");
      } else if(i % 3 == 0) {
        console.log("Fizz");
      } else if(i%5==0) {
        console.log("Buzz");
      } else console.log(i);
    }
  };
  //multiplos();

  const invertir = (numero) => {
    let nuevoNumero = '';
    let numeroString = String(numero)
    for (let i = numeroString.length - 1; i >= 0; i--) {
      nuevoNumero += numeroString[i];
    }
    return Number(nuevoNumero)
  };
  let numeroInvertido = invertir(356);
  console.log(numeroInvertido);
  