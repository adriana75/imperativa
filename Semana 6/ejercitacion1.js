let matriz = [[1, 2], [3, 4] ]
//console.table(matriz)

//Posición 1-1
for(let fila = 0; fila < matriz.length; fila++){
    for(let columna=0;columna<matriz[fila].length;columna++){
        //console.log(matriz[fila][columna]);
    }
}
//console.log(matriz[1][1]);

//Cambiar valor de la posición 1-0
matriz[1][0] = 7
//console.log(matriz);

let arrayMatriz = []
let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY
console.table(arrayMatriz)

console.log(arrayMatriz.length)
for(let i=0; i<arrayMatriz.length; i++) {
    console.log(arrayMatriz[i])
}

//Primera columna
for(let i=0; i<arrayMatriz.length; i++) {
    //console.log(arrayMatriz[i][0])
}

//Primera fila
for(let i=0; i<=arrayMatriz.length; i++) {
    //console.log(arrayMatriz[0][i])
}

//Bucle que recorre el primer array
for(let i=0; i<arrayMatriz.length; i++) {
    //Bucle que recorre el array que está en la posición i
    for(let j=0; j<arrayMatriz[i].length; j++) {
        console.log(arrayMatriz[i][j]);
    }
}




