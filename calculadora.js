const sumar = (num1, num2) => {
    let suma = num1 + num2
    return suma
}
const restar = (num1, num2) => {
    let resta = num1 - num2
    return resta
}
const multiplicacion = (num1, num2) => {
    let producto = num1 * num2
    return producto
}
const dividir = (num1, num2) => {
    let division;
    if(num2===0){
        division = "No se puede hacer la división"
    }else {
        division = num1 / num2
    }
    return division
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------")

let suma = sumar(10, 20)
console.log("Suma: ", suma)

let resta = restar(30, 50)
console.log("Resta: " + resta)

let producto = multiplicacion(4, 9)
console.log("Producto: ", producto)

let division = dividir(30, 10)
console.log("División: ", division)

let divisionCero = dividir(40, 0)
console.log(divisionCero);

console.log("-------------EXTRA----------");

const cuadradoDeUnNumero = numero => {
    let cuadrado = multiplicacion(numero, numero)
    return cuadrado
}

let cuadrado = cuadradoDeUnNumero(2)
console.log(cuadrado);

const promedioDeTresNumeros = (num1, num2, num3) => {
    let suma = sumar(sumar(num1, num2), num3);
    let promedio = dividir(suma, 3)
    return promedio
}
let promedio = promedioDeTresNumeros(8, 3, 4)
console.log("El promedio es: ", promedio);

const calcularPorcentaje = (a, b) => {
    let porcentaje = dividir(multiplicacion(a, b), 100)
    return porcentaje
} 
let porcentaje = calcularPorcentaje(300, 15)
console.log("Porcentaje: ", porcentaje);

const generadorDePorcentaje = (a, b) => {
    let generadorPorcentaje = multiplicacion(dividir(a, b), 100)
    return generadorPorcentaje
}
let generadorPorcentaje = generadorDePorcentaje(2, 200)
console.log("Generador de porcentaje: ", generadorPorcentaje + "%");




