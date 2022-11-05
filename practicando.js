//Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
console.log("Hola Mundo");

//Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
console.log("Hello World");

//Escribe un programa de tres líneas que pida un número, 
//pida otro número y escriba el resultado de sumar estos dos números.
const sumar = (num1, num2) => num1 + num2
console.log(sumar(3, 5));

//Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y 
//escriba un texto que diga “Hola nombreUsuario”
const saludo = nombre => `Hola ${nombre}`
console.log(saludo("Adriana"));

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const mayor = (num1, num2) => num1 > num2 ? num1 : num2
console.log(mayor(10, 20));

//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const mayorTres = (num1, num2, num3) => {
    if (num1 > num2){
        return num1
    } else if (num2 > num3){
        return num2
    } else return num3
}
console.log(mayorTres(10, 30, 20));

//Escribe un programa que pida un número y diga si es divisible por 2
const divisible = numero => numero %2 == 0
console.log(divisible(2));
console.log(divisible(3));
console.log("--------");

//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
const letraA = frase => {
    let contador = 0
    for(let i = 0; i < frase.length; i++){
        frase[i]=='a' ? contador += 1 : ""
    }
    return contador
}
console.log(letraA("adriana"));

//Escribe un programa que pida una frase y escriba las vocales que aparecen
const vocales = frase => {
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u'){
            console.log(frase[i]);
        }
    }
}
vocales("adriana")

//Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
const contarVocales = frase => {
    let contador = 0
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u'){
            contador += 1
        }
    }
    return contador
}
console.log(contarVocales('adriana'));
console.log('-------');

//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
const contarPorVocal = frase => {
    
    let A = 0;
    let E = 0;
    let I = 0;
    let O = 0;
    let U = 0;

    for(let i = 0; i < frase.length; i++){
        switch(frase[i]){
            case 'a':
                A += 1
            break
            case 'e':
                E += 1
            break
            case 'i':
                I += 1
            break
            case 'a':
                O += 1
            break
            case 'u':
                U += 1
            break
        }
    }

    let cantidad = {
        a: A,
        e: E,
        i: I,
        o: O,
        u: U
    }

    return cantidad
}
console.log(contarPorVocal('adriana'));


//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
//(sólo hay que comprobar si lo es por uno de los cuatro)
const divisibleVarios = numero => {
    if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
        return "Es divisible por 2, 3, 5 o 7"
    } else return "No es divisible ni por 2, ni por 3, ni por 5, ni por 7"
}
console.log(divisibleVarios(23));

//Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible 
//(hay que decir todos por los que es divisible)
const divisibleNumero = numero => {
    if (numero % 2 === 0){
        return "Es divisible por 2"
    } else if(numero % 3 === 0){
        return "Es divisible en 3"
    } else if(numero % 5 === 0){
        return "Es divisble en 5"
    }else if(numero % 7 === 0){
        return "Es divisible en 7"
    }else return "No es divisible en 2, 3, 5 o 7"
}
console.log(divisibleNumero(23));

//Escribir un programa que escriba en pantalla los divisores de un número dado
const divisores = numero =>{
    for(let i=1; i <= numero; i++){
        if(numero%i==0){
            console.log(i, " ");
        }
    }
} 
divisores(100)
divisores(10)

//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
const divisoresComunes = (num1, num2) => {
    for(let i=1; i <= num1; i++){
        if(num1%i==0 && num2%i==0){
            console.log(i, " ");
        }
    }
}
divisoresComunes(10, 100)
console.log('-------');

//Escribir un programa que nos diga si un número dado es primo 
//(no es divisible por ninguno otro número que no sea él mismo o la unidad)
const primo = numero => {
    if (numero == 0 || numero == 1 || numero == 4) return 'No es primo';
	for (let i = 2; i < numero; i++) {
		if (numero % i == 0) return 'No es primo';
	}
	return 'Es primo';
}
console.log(primo(97));
console.log(primo(1));