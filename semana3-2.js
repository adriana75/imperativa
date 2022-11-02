const numerosSiguientes = numero => {
    for (let i = 1; i <= 10; i++) {
        console.log(numero++)
    }
}
numerosSiguientes(5)
console.log("---------------");

const numeroSalto = () => {
    for (let i = 5; i<=20; i+=3){
        console.log(i)
    }
}
numeroSalto()
console.log("---------------");

const sumatoria = () => {
    let suma = 0
    for(let i = 0; i <= 100; i++){
        suma +=i
    }
    return suma
}
let sumaTotal = sumatoria()
console.log(sumaTotal);
console.log("---------------");

const factorial = numero => {
    let iFactorial = 1
    for(let i=1; i<=numero; i++){
        iFactorial *= i
    }
    return iFactorial
}
let rFactorial = factorial(5)
console.log(rFactorial);
console.log("---------------");

const fibonacci = numero => {
    let a = 0
    let b = 1
    let fibo = 0
    for(let i = 1; i <= numero; i++){
        console.log(fibo);
        a = b 
        b = fibo
        fibo = a + b
    }
}
fibonacci(10)




