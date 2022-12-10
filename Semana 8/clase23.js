// Ejercicio 1
// Dada la siguiente colección:

let personas = [
 {
   id: 1,
   nombre: "Ale",
   edad: 15
 },
 {
   id: 2,
   nombre: "Javi",
   edad: 83
 },
 {
   id: 3,
   nombre: "Luis",
   edad: 26
 },
 {
   id: 4,
   nombre: "Dan",
   edad: 16
 },
 {
   id: 5,
   nombre: "Tito",
   edad: 22
 },
 {
   id: 6,
   nombre: "Marina",
   edad: 76
 },
 {
   id: 7,
   nombre: "Susy",
   edad: 35
 },
 {
   id: 8,
   nombre: "John",
   edad: 25
 },
]

// Realizar lo siguiente:

// Ordenar la colección de menor a mayor utilizando bubble sort.

const  ordenarMenMay = arr =>{
    let aux 
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length - 1; j++) {

            if( arr[j].edad > arr[j + 1].edad ){

                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
            
        }
    }
}
ordenarMenMay (personas)
console.log(personas);


// Crear una función buscarNombre que recibe como parámetros la colección de personas y una edad, y como resultado deberá imprimir por consola el nombre correspondiente a la persona cuya edad fue pasada como parámetro. 
// Para realizar la búsqueda en la colección de personas, utilizar el algoritmo de búsqueda binaria.

const buscarNombre = (persona,edad)=> {
        let low = 0;
        let high = persona.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const guess = persona[mid];
            if (guess.edad === edad) {
                console.log(guess.nombre);
            }
            if (guess.edad > edad) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

    
}
buscarNombre(personas,15);




// Por ejemplo:
// buscarNombre(personas,25) // Imprime  John
// buscarNombre(personas,76) // Imprime Marina

// buscarNombre(personas,16) // Imprime Dan
// buscarNombre(personas,15) // Imprime Ale

// Tip: Así como ordenaste una colección con Bubblesort, 
//fijándote en una propiedad numérica, 
//podrás aplicar el algoritmo de búsqueda binaria de la misma manera. 
//Solo tendrás que identificar cuál es la propiedad numérica 
//que te interesa para la búsqueda.


