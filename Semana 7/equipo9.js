const edades = [33, 27, 34, 30, 34, 25];

const ordenarAsc = arr => {
    let aux = undefined
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            if(arr[j]>arr[j+1]){
                aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
}
let ordenadoAsc = ordenarAsc(edades)
console.log(ordenadoAsc);

const ordenarDesc = arr => {
    let aux = undefined
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            if(arr[j]<arr[j+1]){
                aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
}
let ordenadoDesc = ordenarDesc(edades)
console.log(ordenadoDesc);

const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]
let ordenarString = ordenarAsc(letras)
console.log(ordenarString);

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

    const ordenarObj = obj => {
        let aux = undefined
        for(let i=0; i<obj.length; i++){
            for(let j=0; j<obj.length-1; j++){
                if(obj[j].saldo>obj[j+1].saldo){
                    aux = obj[j].saldo
                    obj[j].saldo = obj[j+1].saldo
                    obj[j+1].saldo = aux
                }
            }
        }
        return obj
    }
    let cuentasOrdenado = ordenarObj(arrayCuentas)
    console.log(cuentasOrdenado);

    const ordenarEdad = obj => {
        let aux = undefined
        for(let i=0; i<obj.length; i++){
            for(let j=0; j<obj.length-1; j++){
                if(obj[j].edadTitular>obj[j+1].edadTitular){
                    aux = obj[j]
                    obj[j] = obj[j+1]
                    obj[j+1] = aux
                }
            }
        }
        return obj
    }
    let edadesOrdenadas = ordenarEdad(arrayCuentas)
    console.log(edadesOrdenadas);
