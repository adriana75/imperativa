let gastos = [[100, 200, 300, 150, 250, 350, 50], [101, 200, 300, 150, 250, 350, 50], [102, 200, 300, 150, 250, 350, 50], [103, 200, 300, 150, 250, 350, 50]]
console.table(gastos);

//Total de gastos de cada semana
const totalGastos = arr =>{   
    for(let fila = 0; fila < arr.length; fila++){
        let total = 0
        for(let columna = 0; columna < arr[fila].length; columna++){
            total += arr[fila][columna]
        }
        console.log(`El gasto de la semana ${fila+1} es: ${total}`);
    }
}
//totalGastos(gastos);

//Total de gastos de una semana específica
const totalGastosSemana = (arr, semana) =>{   
    let total = 0
    for(let columna = 0; columna < arr[semana-1].length; columna++){
        total += arr[semana-1][columna]
    }
    console.log(`El gasto de la semana ${semana} es: ${total}`);
}
totalGastosSemana(gastos, 4)

//Total de gastos por día
const totalGastosDia = arr =>{   
    for(let columna = 0; columna < arr[0].length; columna++){
        let total = 0
        for(let fila = 0; fila < arr.length; fila++){ 
            total += arr[fila][columna]
        }
        console.log(`El gasto del día ${columna+1} es: ${total}`);
    }
}
//totalGastosDia(gastos);

//Total de gastos de un día específico
const totalGastosD = (arr, dia) =>{   
    let total = 0
    for(let fila = 0; fila < arr.length; fila++){ 
        total += arr[fila][dia-1]
    }
    console.log(`El gasto del día ${dia} es: ${total}`);
}
totalGastosD(gastos, 7)

//Total de gastos del mes
const totalGastosMes = arr =>{   
    let total = 0
    for(let fila = 0; fila < arr.length; fila++){
        for(let columna = 0; columna < arr[fila].length; columna++){
            total += arr[fila][columna]
        }
    }
    return total
}
//console.log("Total de gastos del mes: " + totalGastosMes(gastos));

//Semana con más gastos
const semanaMasGastos = (arr) =>{   
    let mayor = 0
    let semana = 0
    for(let fila = 0; fila < arr.length; fila++){
        let total = 0
        for(let columna = 0; columna < arr[fila].length; columna++){
            total += arr[fila][columna]
            if(total > mayor){
                mayor = total
                semana = fila + 1
            }
        }
    }
    console.log(`La semana con más gastos es la ${semana} con gastos: ${mayor}`);    
}
//semanaMasGastos(gastos);

//Día con más gastos
const diaMasGastos = (arr) =>{   
    let mayor = 0
    let dia = 0
    for(let columna = 0; columna < arr[0].length; columna++){
        let total = 0
        for(let fila = 0; fila < arr.length; fila++){
            total += arr[fila][columna]
            if(total > mayor){
                mayor = total
                dia = columna + 1
            }
        }
    }
    console.log(`El día con más gastos es el ${dia} con gastos: ${mayor}`);    
}
//diaMasGastos(gastos)