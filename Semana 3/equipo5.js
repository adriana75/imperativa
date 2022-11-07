//Ejercicio 1
//Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola.
const frase = (texto) => texto
let imprimir = frase("Hola Consola!!!!")
console.log(imprimir);
console.log("1----------");

//Ejercicio 2
//Escribí un programa que le pregunte al usuario su nombre eimprima "Hola " seguido del nombre y un signo de exclamación.
const bienvenida = nombre => `Hola ${nombre}!`
let mostrar = bienvenida("Belu")
console.log(mostrar);
console.log("2----------");

//Ejercicio 3
//Escribí un programa que le pida al usuario ingresar un número, luego le pida un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.
const sumar = (num1, num2) => num1 + num2
let suma = sumar(20, 13)
console.log(suma);
console.log("3----------");

//Ejercicio 4
//Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años" (siendo X la cantidad de años).
const edad = year => `Tienes ${2022 - year} años` 
let años = edad(1987)
console.log(años);
console.log("4----------");

//Ejercicio 5
//Escribí un programa que piense un número de forma aleatoria
//del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
//número es correcto debe imprimir en la consola "Felicitaciones,
//ese era!", de lo contrario, debe imprimir "Lo siento, intenta nuevamente!"
const aleatorio = num => {
    let min = 1
    let max = 10
    let aleatorio = Math.floor(Math.random()*(max-min+1)+min)
    return num == aleatorio ? "Felicitaciones, ese era!" : "Lo siento, intenta nuevamente!"
}
let adivinar = aleatorio(8)
console.log(adivinar);
console.log("5----------");

//Ejercicio 6
//Escribí un programa que imprima los números pares del 0 al 100.
const imprimirPares = () => {
    for(let i = 0; i <=100; i++){
        i%2==0 ? console.log(i) : ""
    }
}
imprimirPares()
console.log("6----------");

//Ejercicio 7
//Escribí un programa que itere sobre el arreglo nombres e imprima cada uno en la consola: 
const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
const iterarNombres = nombresArreglo => {
    for(let i = 0; i < nombresArreglo.length; i++){
        console.log(nombresArreglo[i]);
    }
}
iterarNombres(nombres)
console.log("7----------");

//Ejercicio 8
//Construí un pseudocódigo que permita ingresar un número, si
//el número es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.
const calcularPorcentaje = numero => numero > 500 ? numero*18/100 : ""
let porcentaje = calcularPorcentaje(30)
console.log(porcentaje)
let porcentaje1 = calcularPorcentaje(1000)
console.log(porcentaje1);
console.log("8----------");

//Ejercicio 9
//Escribí una función llamada elemento que recibe un arreglo
//como parámetro. La función debe devolver el valor que se
//encuentra en la tercera posición. Si el arreglo no tiene al menos
//3 elementos deberá retornar -1.
const elementos = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
const elementos2 = ["Pedro", "Pablo"];
const terceraPosicion = elementosArray => elementosArray.length >2 ? elementosArray[2] : -1
let posicionTres = terceraPosicion(elementos) 
console.log(posicionTres);
let posicionTres2 = terceraPosicion(elementos2)
console.log(posicionTres2);
console.log("9----------");

//Ejercicio 10
//Se ingresa por teclado un número natural de hasta 2 cifras, si
//tiene una cifra que muestre lo mínimo que le falta para ser un
//número de 2 cifras; de lo contrario, que muestre lo mínimo que
//le falta para ser un número de 3 cifras. Considerar que el
//usuario ingresa números de hasta dos cifras.
const faltante = num => num.toString().length <= 1 ? 10 - num : 100 - num
let cifras = faltante(2)
let cifras2 = faltante(35)
console.log(cifras)
console.log(cifras2);
console.log("10----------");

//Ejercicio 11
//Hacer un algoritmo que muestre el promedio de varias
//notas o de N notas ingresadas, se debe definir el valor de N
//para conocer la cantidad de notas a ingresar.
const promedio = (notas) => {
    let contador = 0
    let n = notas.length
    for (let i = 0; i < n; i++){
        contador += notas[i]
    }
    let prom = contador/n
    return prom
}
let notas = [5, 2.5, 4]
console.log(promedio(notas));
console.log("11----------");

//Ejercicio 12
//Hacer un programa que calcule la suma de los N primeros
//números naturales, dónde N es el número límite ingresado por teclado.
const sumaNaturales = n => {
    let suma = 0
    for (let i = 1; i <= n; i++) {
        suma += i
    }
    return suma
}
console.log(sumaNaturales(5));
console.log("12----------");