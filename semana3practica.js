const prompt = require("prompt-sync")({ sigint: true });

const getRandomIntInclusive = (min, max) => {
   let aleatorio = Math.floor(Math.random()*(max-min+1)+min)
   return aleatorio
}
const adivinar = numero => {
    let aleatorio = getRandomIntInclusive(1,10);
    return aleatorio == numero ? "Felicitaciones, ese era!" : "Lo siento, intenta nuevamente!"
}
let numero = adivinar(10)
//console.log(numero);

const esPar = () => {
    for (let i = 1; i <=100; i++){
        i%2==0 ? console.log(i) : "" 
    }
}
//esPar()

const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
const iterar = nombres => {
    nombres.forEach(element => {
        console.log(element)
    });
}
//iterar(nombres)

const porcentaje = numero => (numero > 500) ? numero*18/100 : ""
let num = porcentaje(100)
//console.log(num);

const arreglo = [1, 2, 3, 4, 5];
const elemento = arreglo => {
    return arreglo.length>2 ? arreglo[2] : -1
}
let arrays = elemento(arreglo)
//console.log(arrays);

const numArray = numero => {
    let intArray = Array.from(String(numero), Number)
    return intArray.length==1 ? "Falta 1" : "Falta 2"
}
//console.log(numArray(1))
//console.log(numArray(11));

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
//console.log(promedio(2));

const sumaNaturales = n => {
    let numeros = []
    let suma = 0
    numeros.length = n
    for (let i = 1; i <= n; i++) {
        numeros[i] = i
        suma += numeros[i]
    }
    return suma
}
//console.log(sumaNaturales(5));

//Mesa de trabajo

/*
if(edad < 18) {
console.log("No puede pasar al bar.")
} else if (edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else {
console.log("Puede pasar al bar y tomar alcohol.")
}*/
let edad = 20
if(edad<0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
}else if(edad > 21){
    console.log("Mayor de edad, felicitaciones")
    edad%2!=0 ? console.log("¿Sabías que tu edad es impar?") : ""
}

const totalAPagar = (vehiculo, litrosConsumidos) => {
    let pagar = 0

    if(vehiculo=="coche"){
        pagar = 86*litrosConsumidos
    } else if (vehiculo=="moto"){
        pagar = 70*litrosConsumidos
    }else if(vehiculo=="autobús"){
        pagar = 55*litrosConsumidos
    }

    litrosConsumidos >=0 && litrosConsumidos<=25 ? pagar += 50 : pagar +=25
    return pagar
} 

let cancelar = totalAPagar("coche", 26)
console.log(cancelar);














