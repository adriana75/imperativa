console.log('Hola');

let container = document.getElementById('container')
console.log(container);

let titulo = document.querySelector('h1')
console.log(titulo);

let subtitulos = document.querySelector('h3')
console.log(subtitulos);

titulo.style.color = 'red';

subtitulos.textContent = 'Este es el título'

//container.innerHTML = `<h1>Se inserta un título</h1>`



let boton = document.getElementById('btn-parrafos')
let parrafos = document.querySelectorAll('p')

boton.addEventListener('click', ()=>{
    for(let i = 0; i<parrafos.length; i++){
        parrafos[i].textContent = `Párrafo ${i+1}`
    }
})

