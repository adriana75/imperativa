let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let multiplicar = list.map(function(numero){
    return numero*10
});
console.log(multiplicar);

let nuevo = list.map(e=>e*10)
console.log(nuevo);

let mayores = list.filter(function(numero){
    return numero>5
});
console.log(mayores);

let suma = list.reduce(function(acc, numero){
    return acc + numero
});
console.log(suma);

list.forEach(function(numeros, indice){
    console.log(`En la posición ${indice}: valor ${numeros}`);
});

//El primer elemento que cumpla con la condición
let encontrado = list.find(element => element == 3);
console.log(encontrado);

//Sort = ordena 