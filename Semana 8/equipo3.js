let encuesta = [
    {
        nombre: "Lobo hombre en París",
        votos: 10
    },
    {
        nombre: "Amor depredador",
        votos: 7
    },
    {
        nombre: "De música ligera",
        votos: 15
    },
    {
        nombre: "Provenza",
        votos: 18
    },
    {
        nombre: "La bachata",
        votos: 6
    }
]

const  ordenarVotos = arr =>{
    let aux 
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length - 1; j++) {

            if( arr[j].nombre > arr[j + 1].nombre ){

                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
            
        }
    }
}

const encontrarIndice = ( arr, buscado )=>{
    for (let i = 0; i < arr.length; i++) {

        if( arr[i].nombre === buscado ){
            return arr[i].votos
        }

    }
}

ordenarVotos(encuesta)
let encontrado = encontrarIndice(encuesta, 'Provenza')
//console.log(encontrado);

const binarySearch = (list, item) => {
	let low = 0;
	let high = list.length - 1;
    let mid
    let guess
	while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = list[mid];
		if (guess.nombre === item) {
			return guess.votos;
		}
		if (guess.nombre > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null; // si no encontramos nada
};
let encontrado2 = binarySearch(encuesta, 'Amor depredador')
console.log(encontrado2);