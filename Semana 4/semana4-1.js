let dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
let animales = ['gato', 'perro', 'vaca']

console.log(`Hoy es ${dias[0]} ${numeros[8]} del mes de ${meses[10]}`);

let primerAnimal = animales.shift()
console.log(primerAnimal);
animales.unshift('Caballo')
animales.push('Conejo')
let ultimoAnimal = animales.pop()
console.log(ultimoAnimal);
console.log(animales);

meses.forEach(mes => console.log(mes))

for (let i = 0; i < dias.length; i++) {
    console.log(dias[i]);; 
}

for (let i in dias) {
    console.log(dias[i]);
}

for (let dia of dias) {
    console.log(dia);
}
console.log('---------');

for (let i = 0; i < primos.length; i++) {
    for (let j = 0; j < primos.length; j++) {
        if (primos[i]==numeros[j]) {
            console.log(numeros[j]);
        }  
    }
} 
console.log('-----');



let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length]) //undefined

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5]) //Iroman

let str = 'un string cualquiera'
let arrayAleatorio= ["Digital", "House", 'true', "string", "123","false", '54', str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1]) //srt

let year = 2022
let nombre = 'adriana'
console.log(year[2]);
console.log(nombre[5]);
let cadena = year.toString()
console.log(cadena[2]);
let cadena2 = String(year)
console.log(cadena2[1]);

console.log('---------');

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
const mayusculas = peliculas => {
    //console.log('For tradicional');
    for(let i = 0; i < peliculas.length; i++){
       console.log(peliculas[i].toUpperCase()); 
    }
    /*
    console.log('For OF');
    for(let pelicula of peliculas){
        console.log(pelicula.toUpperCase());
    }
    console.log('For Each');
    peliculas.forEach(pelicula => console.log(pelicula.toUpperCase()));
    console.log('For in');
    for(let pelicula in peliculas){
        console.log(peliculas[pelicula].toUpperCase());
    }
    */
}
mayusculas(peliculas)
console.log('----------');

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
const concatenar = (peliculas, peliculas2) => {
    peliculas2.pop()
    peliculas = mayusculas(peliculas.concat(peliculas2))
}
concatenar(peliculas, peliculasAnimadas);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
let prueba = [8, 10, 6, 9, 10, 6, 6, 8, 4];

const comparar = (score1, score2) => {
    let iguales = true;
    for (let i = 0; i < score1.length; i++){
        if(score1[i]!=score2[i]){
           iguales = false
           break
        }
    }
    return iguales ? 'Iguales' : 'diferentes'
}
console.log(comparar(asiaScores, prueba));
console.log(comparar(asiaScores, euroScores));
console.log('-------');

const inverso = arreglo => {
    for (let i = arreglo.length-1; i >= 0; i--){
        console.log(arreglo[i]);
    }
}
inverso(prueba)

const inversor = arreglo => {
    let nuevoArreglo = []
    for (let i = arreglo.length-1; i >= 0; i--){
        nuevoArreglo.push(arreglo[i])
    }
    return nuevoArreglo
}
console.log(inversor(prueba));

const inversorPop = arreglo => {
    let nuevoArreglo = []
    while(arreglo.length>0){
        nuevoArreglo.push(arreglo.pop())
    }
    return nuevoArreglo
}
console.log(inversorPop(prueba));

const sumaArray = arreglo => {
    let suma = 0
    for(let i = 0; i < arreglo.length; i++){
        suma += arreglo[i]
    }
    return suma
}
console.log(sumaArray([2,3,6, 10]));

const join = arreglo => {
    let cadena = []
    for(let i = 0; i < arreglo.length; i++){
        cadena += arreglo[i]
    }
    return cadena
}
console.log(join(["h","o","l","a"]));
console.log(join(["c","h","a","u"]));
console.log(join(["a","d","r","i","a","n","a"]));











