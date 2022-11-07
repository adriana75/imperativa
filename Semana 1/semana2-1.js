const prompt = require("prompt-sync")({ sigint: true });

//Situación 1: Ir al trabajo

let temperatura = prompt("Ingrese la temperatura: ")
console.log(temperatura);

let isLlueve = prompt("Ingrese 1 si llueve o 0 si no: ")
if(isLlueve==1){
    console.log("Está lloviendo")
}else {
    console.log("Está haciendo sol");
}

let tipoTransporte = prompt("Ingrese el tipo de transporte: ")
console.log("VIajo en :" + tipoTransporte)

const distancia = 15
console.log("La distancia para llegar al trabajo es: " + distancia)

let horaIngreso = 8
let horasalida = 17
let horasLaboradas = horasalida - horaIngreso
console.log("El total de horas laboradas es: " + horasLaboradas);


//Situación 2: Ir al supermercado

let comprar = ['arroz', 'papa', 'huevo', 'azucar', 'platano', 'mora']
console.log(comprar);

let presupuesto = 100000
console.log("El presupuesto es: " + presupuesto);

let precios = {
    arroz: 3800,
    papa: 4000,
    huevo: 16000,
    azucar: 5000,
    platano: 2000,
    mora: 5500
}
console.log(precios);

let totalCompra = 35300
console.log("El total de la compra es: " + totalCompra);

console.log("Sus vueltos son: " + (presupuesto - totalCompra));

//Piensen cuál es la diferencia entre la línea 2 y la línea 3. ¿Cuál creen que es la mejor opción?

const nombre = "Esteban"
console.log("Esteban")
console.log(nombre) //Mejor opción por buenas práctica y para reutilizar la constante en otro blolque del código

//Desafío extra

let p = 10;
let r = 6;

[p, r] = [r, p];

console.log("Pantalones " + p + "\nRemeras: " + r);







