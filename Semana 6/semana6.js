let butacasCine = [['ocupado', 'libre', 'libre', 'libre'],
['libre', 'libre', 'libre', 'libre'],
['libre', 'libre', 'ocupado', 'ocupado'],
['ocupado', 'ocupado', 'ocupado', 'ocupado'],
['libre', 'libre', 'libre', 'libre']];

//recordido completo
for (let fila=0;fila<butacasCine.length;fila++){
    for(let columna=0;columna<butacasCine[fila].length;columna++){
        //console.log(butacasCine[fila][columna]);
    }
}

//una nueva matriz solo con las libres
let libres = []
for (let fila=0;fila<butacasCine.length;fila++){
    for(let columna=0;columna<butacasCine[fila].length;columna++){
        if(butacasCine[fila][columna] == 'libre'){
            libres.push(butacasCine[fila][columna])
        }
    }
}
console.log(libres);