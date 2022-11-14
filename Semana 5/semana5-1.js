//Loop de pares
const loopDePares = numero => {
    for(let i=0; i<=100; i++){
        console.log(i);
        let x = i + numero
        x%2==0 ? console.log(`El número ${x} es par`) : " "
    }
}
 //loopDePares(5)

 //Loop de impares con palabra
const loopDeImpares = (numero, palabra) => {
    for(let i=0; i<=100; i++){
        console.log(i);
        let x = i + numero
        x%2!=0 ? console.log(palabra) : " "
    }
}
 //loopDeImpares(5, "impar")

const sumatoria = numero => {
    let suma = 0
    for (let i = 0; i <= numero; i++) {
        suma += i
    }
    return suma
}
 //console.log(sumatoria(3));
 //console.log(sumatoria(8));

const nuevoArreglo = numero => {
    let nuevoArreglo = []
    for(let i=0; i<numero; i++){
        nuevoArreglo.push(i+1)
    }
    return nuevoArreglo
}
 //console.log(nuevoArreglo(5));
 //console.log(nuevoArreglo(10));

const split = cadena => {
    let nuevoArreglo = []
    for(let i = 0; i < cadena.length; i++){
        nuevoArreglo.push(cadena[i])
    }
    return nuevoArreglo
}
 //console.log(split("hola"));
 //console.log(split("chau"));

const arrayHandler = (arr1, arr2) => {
    for(let i = 0; i<arr1.length; i++){
        console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`);
    }
}
let arr1 = [1, 2, 3, 4]
let arr2 = ["h", "o", "l", "a"]
//arrayHandler(arr1, arr2)

const palindromo = palabra => {
    let nuevaPalabra = ""
    for(i=palabra.length-1; i >=0; i--){
        nuevaPalabra += palabra[i]
    }
    console.log(nuevaPalabra);
    return nuevaPalabra.toUpperCase() == palabra.toUpperCase() ? true : false
}
console.log(palindromo("Anilina"));
console.log(palindromo("Ana"));
console.log(palindromo("Enrique"));
