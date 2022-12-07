//Ejercicio 1
let cuadros = [
    {
        nombre : "Mona Lisa",
        creador : "Leonardo Da Vinci",
        creacion : 1503
    },
    {
        nombre : "La ultima cena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    },
    {
        nombre : "La noche estrellada",
        creador : "Vincent van Gogh",
        creacion : 1889
    },
    {
        nombre : "El grito",
        creador : "Edvard Munch",
        creacion : 1893
    },
    {
        nombre : "Trigal con cuervos",
        creador : "Vincent van Gogh",
        creacion : 1890
    },
    {
        nombre : "Maria Magdalena",
        creador : "Leonardo Da Vinci",
        creacion : 1495
    }
]
const mayoresCreacion = arr => {
    let nuevoArr = []
    for(let i=0; i<arr.length; i++){
        if(arr[i].creacion>1800){
            nuevoArr.push(arr[i])
        }
    }
    return nuevoArr
}
let mayores = mayoresCreacion(cuadros)
console.log(mayores);

//Ejercicio 2
const ordenar = (arr, orden) =>{
    let aux = undefined
    orden = orden.toUpperCase()
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
          if(orden  == 'ASC'){
            if (arr[j].creacion > arr[j + 1].creacion) {
                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
              }
          }else if(orden == 'DESC'){
            if (arr[j].creacion < arr[j + 1].creacion) {
                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
          }
        }
    }
}
ordenar(cuadros, 'DESC')
console.log(cuadros);

//Ejercicio 3
let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]
const sumaFila = (arr, fila)=>{
    let suma = 0
    for(let i=0; i<=arr[fila].length-1; i++) {
        suma += arr[fila][i]
    }
    return suma
}
let suma = sumaFila(matriz, 2)
console.log(suma);

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
let arrayPares = pares(matriz)
console.log(arrayPares); 

