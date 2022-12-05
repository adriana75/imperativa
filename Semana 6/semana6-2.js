let matriz = new Array()

for (let i = 0; i < 5; i++) {
    matriz[i] = new Array(5);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random()*10);
  }
}

//console.table(matriz);

let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ];
  let diagonalUno = 0;
  let diagonalDos = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        diagonalUno += arr[i][j];
      }
      if (i + j == arr.length - 1) {
        diagonalDos += arr[i][j];
      }
    }
  }
  //console.log("1: " + diagonalUno);
  //console.log("2: " + diagonalDos);

let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

const sumar = arr => {
	let suma = 0
	for (let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]>=10 && arr[i][j]<1000){
                suma += arr[i][j]
            }
        }
	}
	return suma;
}

let resultadoSuma = sumar(numeros)
console.log(resultadoSuma);