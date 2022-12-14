let body = document.querySelector('body');
let subtitulo = document.querySelector('h2');
let parrafos = document.querySelectorAll('p');

body.style.color = 'green';

subtitulo.textContent = 'Bienvenidos a mi página web';

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = `Párrafos cambiados ${i+1}`    
}

const saludo = () => {
    body.innerHTML += `<h1>Hola!</h1>`
}

