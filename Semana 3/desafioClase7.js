// Caso 1

let edad = 23 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)
if(edad < 0) {
console.log("Error, edadinválida. Por favor ingrese un número válido.")
} else if (edad >= 21){
console.log("Bienvenido. Felicitaciones por haber llegado a la mayoría de edad. Puede pasar al bar, pero no puede tomar alcohol.") 
if(edad % 2 != 0){ 
    console.log("¿Sabías que tu edad es impar?");
}
}
else {
console.log("Puede pasar al bar y tomar alcohol.")
}

// Caso 2


const totalAPagar = (vehiculo, litrosConsumidos) => {
    let pagar = 0
    if(vehiculo == "coche"){
        pagar = 86*litrosConsumidos
    }else if(vehiculo == "moto"){
        pagar = 70*litrosConsumidos
    }else if(vehiculo == "autobus"){
        pagar = 55*litrosConsumidos
    }
    litrosConsumidos >= 0 && litrosConsumidos <= 25 ? pagar += 50 : pagar += 25 
    return pagar
}

console.log(totalAPagar("moto", 25))

// Caso 3

const sandwich = (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
    let pagar = 0
    if(base == "pollo"){
        pagar = 150
    }else if (base == "carne"){
        pagar = 200
    }else if (base == "veggie"){
        pagar = 100
    }else{
        console.log("Ingrese una base válida");
    }

    if(pan == "blanco"){
        pagar += 50
    }else if (pan == "negro"){
        pagar += 60
    }else if (pan == "gluten"){
        pagar += 75
    }else{
        console.log("Ingrese un tipo de pan válido");
    }

    queso ? pagar += 20 : ""
    tomate ? pagar += 15 : ""
    lechuga ? pagar += 10 : ""
    cebolla ? pagar += 15 : ""
    mayonesa ? pagar += 5 : ""
    mostaza ? pagar += 5 : ""

    return pagar
}

let pagarSandwich = sandwich("pollo", "blanco", true, false, true, false, false, true)

console.log(pagarSandwich);

// Caso 4

const getRandomIntInclusive = (min, max) => {
    let aleatorio = Math.floor(Math.random()*(max-min+1)+min)
    return aleatorio
}
const adivinar = numero => {
    let aleatorio = getRandomIntInclusive(1,10);
    return aleatorio == numero ? "Felicitaciones, ese era!" : "Lo siento, intenta nuevamente!"
}
let numero = adivinar(10)
console.log(numero);

// Caso 5

const abrirParacaidas = (velocidad, altura) => velocidad <1000 && (altura >=2000 && altura <3000) ? "Abrir Paracaídas" : ""
console.log(abrirParacaidas(900, 2000));

// Caso 6

const traductor = palabra => {
    switch(palabra){
        case "casa":
            return "home"
            break
        case "perro":
            return "dog"
            break
        case "pelota":
            return "ball"
            break
        case "árbol":
            return "tree"
            break
        case "genio":
            return "genius"
            break
        default: 
            return "La palabra ingresada es incorrecta"
    }
}
console.log(traductor("perro"))

// Caso 7

const valoracion = valor => {
    switch (valor) {
        case "Muy Mala":
            return "Calificaste la película como Muy Mala. Lo lamentamos mucho. Gracias por tu visita."
            break
        case "Mala":
            return "Calificaste la película como Mala. Lo lamentamos mucho. Gracias por tu visita."
            break
        case "Mediocre":
            return "Calificaste la película como Mediocre. Lo lamentamos mucho. Gracias por tu visita."
            break
        case "Buena":
            return "Calificaste la película como Buena. Gracias por tu visita."
            break
        case "Muy buena":
            return "Calificaste la película como Buena. Gracias por tu visita."
        default:
            return "Ingresaste un valor inválido"
    }
}
console.log(valoracion("Buena"));


