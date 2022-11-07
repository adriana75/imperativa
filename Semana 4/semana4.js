let frase = 'Breaking Bad Rules!'
console.log(frase.slice(-10));

const dominio = digitalhouse => digitalhouse.replace(digitalhouse, `http://www.${digitalhouse}`)
console.log(dominio("digitalhouse.com.ar"));

function menciona (texto, palabra){
    return texto.indexOf(palabra) != -1
}
console.log(menciona("Hola mundo","Hola") );
console.log(menciona("Estoy programando","mundo"));

let frase1 = 'Hola!, soy Carli';
let licenciada = frase1.slice(11, 15)
console.log(licenciada);

let tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    saludar: function () {
        return `Hola, me llamo ${this.nombre}`
    }
}
console.log(tenista.saludar());