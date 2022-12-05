const ordenador = arr => {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-1; j++) {
            if( arr[j] > arr[j + 1] ){

                return false

            }
        }
    }
    return true
}
let arr1 = [4,9,2,5,6,7,1,2] // false
let arr2 = [1,2,3,4,5,6,7,8] // true
//console.log(ordenador(arr1));
//console.log(ordenador(arr2));

const generarMatriz = (f, c)=>{
    let matriz = []
    let a = 1
    for (let i = 0; i < f; i++) {
        matriz[i] = [];
        for (let j = 0; j < c; j++) {
            matriz[i][j] = a++
        }
    }
    //si las filas y columnas son impares
    if(matriz.length %2 !== 0){
        centro = matriz [ (matriz.length -1) / 2][ (matriz.length -1) / 2]
    }else centro = matriz [ (matriz.length) / 2][ (matriz.length) / 2] //longitud par
    //console.log(centro);
    return matriz
}
let matriz = generarMatriz(6, 6)
//console.log(matriz);

const personas =
[
    {
      nombre: "Arlene Barr",
      legajo: 3955,
      edad: 33,
    },
    {
      nombre: "Roslyn Torres",
      legajo: 3925,
      edad: 27,
    },
    {
      nombre: "Cleo Lopez",
      legajo: 1965,
      edad: 34,
    },
    {
      nombre: "Daniel Malone",
      legajo: 3925,
      edad: 30,
    },
    {
      nombre: "Ethel Leon",
      legajo: 1915,
      edad: 34,
    },
    {
      nombre: "Harding Mitchell",
      legajo: 1905,
      edad: 25,
    }
]
const orderAscLegajo = arr => {
    let aux = undefined
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-1; j++) {
            if( arr[j].legajo > arr[j + 1].legajo ){
                aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
}
orderAscLegajo(personas)
//console.log(personas);
const orderDescLegajo = arr => {
    let aux = undefined
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-1; j++) {
            if( arr[j].legajo < arr[j + 1].legajo ){
                aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
}
orderDescLegajo(personas)
//console.log(personas);
const ordenar = (arr, orden, prop) => {
    let aux = undefined
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-1; j++) {
            if(orden === 'ASC'){
                if( arr[j][prop] > arr[j + 1][prop] ){
                    aux = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = aux
                }
            }else if(orden === 'DESC'){
                if( arr[j][prop] < arr[j + 1][prop] ){
                    aux = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = aux
                }
            }
        }
    }
}
ordenar(personas, 'ASC', 'edad')
//console.log(personas);

let fila1 = [4,9,2]
let fila2 = [3,5,7]
let fila3 = [8,1,6]
let matriz2 = [fila1, fila2, fila3]
//console.log(matriz2);
//Función que reciba por parámetro la fila y retornar la suma de la misma
const sumaFila = (arr, fila)=>{
    let suma = 0
    for(let i=0; i<=arr[fila].length-1; i++) {
        suma += arr[fila][i]
    }
    return suma
}
//console.log(sumaFila(matriz2, 0));
//Función que retorne en un array la suma de las diagonales [15 , 15], 
//sumando él centro las dos veces
//   centro = arr [ (arr.length -1) / 2][ (arr.length -1) / 2]
const sumaDiagonales = arr =>{
    let arrDiagonales = []
    let diagonalUno = 0
    let diagonalDos = 0
    for (let i = 0; i < arr.length; i++) {
        diagonalUno += arr[i][i]; 
        diagonalDos += arr[i][ arr.length - 1 - i ] 
    }
    arrDiagonales.push(diagonalUno)
    arrDiagonales.push(diagonalDos)
    return arrDiagonales
}
//console.log(sumaDiagonales(matriz2));
//Función que retorne en un array los elementos pares ejemplo [4, 2, 8, 6]
const pares = arr =>{
    let pares = []
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(arr[i][j] %2 === 0){
                pares.push(arr[i][j])
            }
        }
    }
    return pares
}
//console.log(pares(matriz2));
//Función que retorne en un array los elementos mayores a 5
const mayoresCinco = arr =>{
    let mayores = []
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(arr[i][j] > 5){
                mayores.push(arr[i][j])
            }
        }
    }
    return mayores
}
//console.log(mayoresCinco(matriz2));
//Función que retorne un objeto literal con dos propiedades
//pares : [4, 2, 8, 6], // array de pares
//impares : [9, 3, 5, 7, 1], // array de impares
const objetos = arr =>{
    let pares = []
    let impares = []
    let objeto = {}
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(arr[i][j] %2 === 0){
                pares.push(arr[i][j])
            }else impares.push(arr[i][j])
        }
    }
    objeto['pares'] = pares 
    objeto['impares'] = impares
    return objeto
}
//console.log(objetos(matriz2));

