let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let multiplicar = list.map(function(numero){
    return numero*10
});
console.log(multiplicar);

let mayores = list.filter(function(numero){
    return numero>5
});
console.log(mayores);

let suma = list.reduce(function(numero, acc){
    return acc + numero
});
console.log(suma);

list.forEach(function(numeros, indice){
    console.log(`En la posición ${indice}: valor ${numeros}`);
});