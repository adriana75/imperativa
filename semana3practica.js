const prompt = require("prompt-sync")({ sigint: true });

//Ejercicio 1
const saludo = frase => frase
let frase = saludo("Hola")
console.log("Ejercicio 1: ", frase);
console.log("----------");

//Ejercicio 2
const saludoNombre = nombre => `Hola ${nombre}!`
let fraseNombre = saludoNombre("Adriana")
console.log("Ejercicio 2: ", fraseNombre);
console.log("----------");

//Ejercicio 3
const sumar = (num1, num2) => num1 + num2
let suma = sumar(3, 5)
console.log("Ejercicio 3: ", suma);
console.log("----------");

//Ejercicio 4
const edad = year => `Tienes ${2022-year} años`
let resultadoEdad = edad(1988)
console.log("Ejercicio 4: ", resultadoEdad);
console.log("----------");

//Ejercicio 5
const adivinar = numero => {
    let min = 1
    let max = 10
    let aleatorio = Math.floor(Math.random()*(max-min+1)+min)
    return aleatorio == numero ? "Felicitaciones, ese era!" : "Lo siento, intenta nuevamente!"
}
let numero = adivinar(10)
console.log("Ejercicio 5: ", numero);

//Ejercicio 6
const esPar = () => {
    for (let i = 1; i <=100; i++){
        i%2==0 ? console.log(i) : "" 
    }
}
console.log("Ejercicio 6: ");
esPar()
console.log("----------");

//Ejercicio 7
const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
const iterar = nombres => nombres.forEach(element => {console.log(element)})
const iterar2 = nombres => {
    for(const iterator of nombres){
        console.log(iterator)
    }
}
const iterar3 = nombres =>{
    for (let i = 0; i < nombres.length; i++){
        const element = nombres[i];
        console.log(element);  
    }
} 
console.log("Ejercicio 7: ");
iterar3(nombres)
console.log("----------");

//Ejercicio 8
const porcentaje = numero => (numero > 500) ? numero*18/100 : ""
let num = porcentaje(100)
console.log("Ejercicio 8: ", num);
console.log("----------");

//Ejercicio 9
const arreglo = [1, 2, 3, 4, 5];
const elemento = arreglo => arreglo.length>2 ? arreglo[2] : -1
let arrays = elemento(arreglo)
console.log("Ejercicio 9: ", arrays);
console.log("----------");

//Ejercicio 10
const numArray = numero => {
    let intArray = Array.from(String(numero), Number)
    return intArray.length<=2 ? "Falta 1" : "Falta 2"
}
console.log("Ejercicio 10: ");
console.log(numArray(1))
console.log(numArray(11));

console.log("----------");

//Ejercicio 11
const promedio = n => {
    let notas = []
    let contador = 0
    notas.length = n
    for (let i = 0; i < n; i++) {
        let nota = prompt()
        notas[i] = Number(nota)
        contador += notas[i]
    }
    let prom = contador/n
    return prom
}
const promedio1 = (n, notas) => {
    let contador = 0
    for (let i = 0; i < n; i++){
        contador += notas[i]
    }
    let prom = contador/n
    return prom
}
//console.log("Ejercicio 11: ", promedio(2));
let notas = [5, 2.5, 4]
console.log("Ejercicio 11: ", promedio1(3, notas));
console.log("----------");

//Ejercicio 12
const sumaNaturalesArray = n => {
    let numeros = []
    let suma = 0
    numeros.length = n
    for (let i = 1; i <= n; i++) {
        numeros[i] = i
        suma += numeros[i]
    }
    return suma
}
const sumaNaturales = n => {
    let suma = 0
    for (let i = 1; i <= n; i++) {
        suma += i
    }
    return suma
}
console.log("Ejercicio 12: ", sumaNaturales(5));
console.log("----------");














