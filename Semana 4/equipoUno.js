let dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
let animales = ['gato', 'perro', 'vaca']

//acceder
console.log(dias[0]);

/*const iterarArreglos = arreglo => {
    for(let i= 0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
}
iterarArreglos(dias)*/

animales[0] = "conejo" //reemplazar un valor de una posición específica
console.log(animales); 

animales.unshift("caballo") //agregar al principio
console.log(animales);

animales.push('loro') //agregar al final
console.log(animales);

animales.shift() //eliminar el primer elemento
console.log(animales);

animales.pop() //elimina el último elemento
console.log(animales);

animales.splice(1,1) //elimina desde una posición hasta la otra posición, en este caso solo un elemento
console.log(animales);

console.log(meses.includes('junio'));
console.log(meses.indexOf('octubre')); 

console.log('----');

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length]) //undefined

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5]) //Iroman

let str = 'un string cualquiera'
let arrayAleatorio= ["Digital", "House", 'true', "string", "123","false", '54', str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1]) //srt: 'un string cualquiera'

console.log('-------');

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log(peliculas[4]);
//let palabra = "hola que mas"
//console.log(palabra.toUpperCase());
const mayusculas = arreglo => {
    for(let i=0; i<arreglo.length; i++){
        console.log(arreglo[i].toUpperCase());
    }
}
mayusculas(peliculas)

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

const concatenar = (arr1, arr2) => {
    let eliminado = arr2.pop()
    for(let i=0; i<arr2.length; i++){
        arr1.push(arr2[i])
    }
    return mayusculas(arr1)
}

concatenar(peliculas, peliculasAnimadas);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

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
console.log(comparar(asiaScores, euroScores));

let prueba = [8, 10, 6, 9, 10, 6, 6, 8, 4];
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






