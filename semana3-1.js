
function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
    let cantidad = 0
    for(let i = 0; i<=numero; i++){    
        if(i%2!=0){
            cantidad = cantidad + 1
        }
    }
    return cantidad    
}

//console.log(noParesDeContarImparesHasta(4))

function tablaDeMultiplicar(numero) {
    //Escribí tu código aquí
   let i = 1;  
   while(i<=10){
       console.log(numero +"*"+ i +"=" + numero*i)
       i++
   } 
}

//console.log(tablaDeMultiplicar(5));