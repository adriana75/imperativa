//Loop de pares
const loopDePares = numero => {
    for(let i = 0; i<=100; i++){
        console.log(i);
        let x = numero + i
        x%2 == 0 ? console.log(`El número ${x} es par`) : " "
    }
}
//loopDePares(5);

//Loop de impares
const loopDeImpares = (numero, palabra) => {
    for(let i = 0; i<=100; i++){
        console.log(i);
        let x = numero + i
        x%2 != 0 ? console.log(`${palabra}`) : " "
    }
}
//loopDeImpares(5, "equipo3")

const sumatoria = numero => {
    let suma = 0
    for(i=0; i<=numero; i++){
        suma += i
    }
    return suma
}
let sumaTotal = sumatoria(8)
//console.log(sumaTotal);

const nuevoArreglo = numero => {
    let nuevoArreglo = []
    for(let i=1; i<=numero; i++){
        nuevoArreglo.push(i)
    }
    return nuevoArreglo
}
let arregloNuevo = nuevoArreglo(10)
//console.log(arregloNuevo);

const split = cadena => {
    let arregloNuevo = []
    for(let i=0; i<cadena.length; i++){
        arregloNuevo.push(cadena[i])
    }
    return arregloNuevo
}
let arreglo = split("hola")
let arreglo2 = split("chau")
//console.log(arreglo);
//console.log(arreglo2);

const arrayHandler = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++){
        console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`);
    }
}
//arrayHandler([1,2,3,4], ["h","o","l","a"])

const palindromo = palabra => {
    let nuevaPalabra = ""
    for(let i = palabra.length-1; i >= 0; i--){
        nuevaPalabra += palabra[i]
    }
    return palabra.toLowerCase() == nuevaPalabra.toLowerCase() ? true : false
}
let palabra = palindromo("Ana")
console.log(palabra);