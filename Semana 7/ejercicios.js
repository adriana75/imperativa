const imprimir = () => {
    for (let i = 5; i <= 20; i+=3) {
      console.log(i);
    }
  };
  //imprimir();

  const piramide = () => {
    for (let i = 1; i <= 30; i++) {
    let cadena = ''
      for (let j = 1; j <= i; j++) {
        cadena += i
      }
      console.log(cadena);
    }
  };
  piramide();