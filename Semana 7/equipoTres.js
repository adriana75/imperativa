//Ejercicio 1
let cantidadLikes = [34, 51, 21, 30, 7, 100, 45, 73, 76, 23, 14, 11, 60, 42, 18]
const ordenarLikes = arr => {
    let aux = undefined
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            if(arr[j]<arr[j+1]){
                aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
}
ordenarLikes(cantidadLikes)
console.log(cantidadLikes);
let primero = cantidadLikes[0]
let segundo = cantidadLikes[1]
let tercero = cantidadLikes[2]
let ultimo = cantidadLikes[cantidadLikes.length-1]
console.log(primero);
console.log(segundo);
console.log(tercero);
console.log(ultimo);

//Ejercicio 2
let temperaturas = [
    {
        dia: 1,
        mes: 11,
        max: 22,
        min: 12
    },
    {
        dia: 2,
        mes: 11,
        max: 23,
        min: 14
    },
    {
        dia: 3,
        mes: 11,
        max: 19,
        min: 9
    },
    {
        dia: 4,
        mes: 11,
        max: 21,
        min: 11
    },
    {
        dia: 5,
        mes: 11,
        max: 19,
        min: 14
    },
    {
        dia: 6,
        mes: 11,
        max: 20,
        min: 8
    },
    {
        dia: 7,
        mes: 11,
        max: 26,
        min: 16
    },
    {
        dia: 8,
        mes: 11,
        max: 21,
        min: 12
    },
    {
        dia: 9,
        mes: 11,
        max: 18,
        min: 8
    },
    {
        dia: 10,
        mes: 11,
        max: 21,
        min: 15
    }

]
const ordenar = (arr, prop, orden) => {
    let aux = undefined
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            if(orden === 'ASC'){
                if(arr[j][prop]>arr[j+1][prop]){
                    aux = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = aux
                }
            }else if(orden === 'DESC'){
                if(arr[j][prop]<arr[j+1][prop]){
                    aux = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = aux
                }
            }     
        }
    }
}
ordenar(temperaturas, 'min', 'ASC')
console.log(temperaturas);
ordenar(temperaturas, 'max', 'DESC')
console.log(temperaturas);