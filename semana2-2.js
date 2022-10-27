const prompt = require("prompt-sync")({ sigint: true });

//Micro Desafío 1: devuelve 30
//Micro Desafío 2: devuelve 20

//FUNCIONES SIMPLES

//Crear una función que convierta pulgadas en centímetros. 
//Recibe por parámetro pulgadas y retorna su equivalente en centímetros. 
const convertir = pulgadas => pulgadas*2.54
let pulgadas = prompt("Ingrese los centímetros: ")
console.log("Las pulgadas son " + convertir(pulgadas));

//Crear una función que recibe un string y lo convierte en una URL.
const url = cadenaUrl => `htpp://www.${cadenaUrl}.com`
let cadenaUrl = prompt("Ingrese una cadena: ")
console.log("La URL es: " + url(cadenaUrl));

//Crear una función que recibe un string y devuelve la misma frase pero con admiración.
const admiracion = frase => frase + "!"
let frase = prompt("Ingrese una frase: ")
console.log(admiracion(frase));

//Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
const edadPerro = edad => edad * 7
let edad = prompt("Ingrese los años: ")
console.log("La edad del perro es:" + edadPerro(edad));

//Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
const valorHora = sueldo => sueldo / 40
let sueldo = prompt("Ingrese su sueldo: ")
console.log("El valor de la hora de trabajo es: " + valorHora(sueldo));

/*Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.*/
const IMC = (altura, peso) => peso/(altura*altura)
let altura = prompt("Ingrese su altura en metros: ")
let peso = prompt("Ingrese su peso en kilogramos: ")
console.log("Su IMC es: " + IMC(altura, peso))

//Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.
function upper (cadena) {
    return cadena.toUpperCase()
}
const upperF = cadena => cadena.toUpperCase()
let cadena = prompt("Ingrese una palabra: ")
console.log("Función declarada: " + upper(cadena));
console.log("Función flecha: " + upperF(cadena));

//Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
function tipoDato (dato) {
    return typeof(dato)
}
const tipoDatoF = dato => typeof(dato)
let dato = prompt("Ingrese un dato: ")
console.log("Función declarada: " + tipoDato(dato))
console.log("Función flecha: " + tipoDatoF(dato))

//Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
function calculaCircunferencia(radio) {
    return 2 * Math.PI * radio;
  }
const calculaCircunferenciaF = radio => 2 * Math.PI * radio
let radio = prompt("Ingrese el valor del radio: ")
console.log("Función declarada - La circunferencia es: " + calculaCircunferencia(radio))
console.log("función flecha - La circunferencia es: " + calculaCircunferenciaF(radio))


