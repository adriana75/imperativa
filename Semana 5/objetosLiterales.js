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
      estaHabilitada: true,
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

let cuentas = {
    arreglo: arrayCuentas,
    menoresTreinta: function(arr) {
        let menores = []
        for(let i=0; i<arr.length; i++){
            arr[i].edadTitular<30 ? menores.push(arr[i].edadTitular) : " "
        }
        return menores
    },
    mayorIgualTreinta: function(arr) {
        let mayorIgual = []
        for(let i=0; i<arr.length; i++){
            arr[i].edadTitular>=30 ? mayorIgual.push(arr[i].edadTitular) : " "
        }
        return mayorIgual
    },
    menoresIgualesTreinta: function(arr) {
        let menoresIgual = []
        for(let i=0; i<arr.length; i++){
            arr[i].edadTitular<=30 ? menoresIgual.push(arr[i].edadTitular) : " "
        }
        return menoresIgual
    },
    joven: function(arr){
        let menor = this.menoresTreinta(arr);
        menor = Math.min(...menor)
        return menor
    },
    habilitadas: function(arr){
        let cuentasHab = []
        for(let i=0; i<arr.length; i++){
            arr[i].estaHabilitada == true ? cuentasHab.push(arr[i].titular) : ""
        }
        return cuentasHab
    },
    deshabilitadas: function(arr){
        let cuentasDes = []
        for(let i=0; i<arr.length; i++){
            arr[i].estaHabilitada != true ? cuentasDes.push(arr[i].titular) : " "
        }
        return cuentasDes
    },
    menorSaldo: function(arr){
        let saldoMenor = {}
        let temp = arr[0].saldo
        for(let i=0; i<arr.length; i++){
            if(arr[i].saldo < temp){
                temp = arr[i].saldo
                saldoMenor = arr[i]
            }
        }
        return saldoMenor
    },
    mayorSaldo: function(arr){
        let saldoMayor = {}
        let temp = arr[0].saldo
        for(let i=0; i<arr.length; i++){
            if(arr[i].saldo > temp){
                temp = arr[i].saldo
                saldoMayor = arr[i]
            }
        }
        return saldoMayor
    },
    generarID: function(arr){
        for(let i = 0; i < arr.length; i++){
            arr[i].id = i + 1
        }
        return arr
    },
    buscarPorID: function(arr, id){
        let encontrado = null
        for(let i=0; i < arr.length; i++){
            if(arr[i].id == id){
                encontrado = arr[i]
                break
            }
        }
        return encontrado
    },
    filtrarPorSaldos: function(arr, saldo){
        let arraySaldos = []
        for(let i=0; i<arr.length; i++){
            if(arr[i].saldo < saldo){
                arraySaldos.push(arr[i].saldo)
            }
        }
        return arraySaldos
    },
    incrementarSaldo: function(arr, id, saldo){
        let encontrado = this.buscarPorID(arr, id)
        if(encontrado != null){
            encontrado.saldo += saldo
        }else encontrado = undefined
        return encontrado
    }
}
//console.log(cuentas.menoresTreinta(arrayCuentas));
//console.log(cuentas.mayorIgualTreinta(arrayCuentas));
//console.log(cuentas.menoresIgualesTreinta(arrayCuentas));
//console.log(cuentas.joven(arrayCuentas));
//console.log(cuentas.habilitadas(arrayCuentas));
//console.log(cuentas.deshabilitadas(arrayCuentas));
//console.log(cuentas.menorSaldo(arrayCuentas));
//console.log(cuentas.mayorSaldo(arrayCuentas));
//console.log(cuentas.generarID(arrayCuentas));
//console.log(arrayCuentas);
let arrayNuevo = cuentas.generarID(arrayCuentas)
//console.log(arrayNuevo);
//console.log(cuentas.buscarPorID(arrayNuevo, 4));
//console.log(cuentas.filtrarPorSaldos(arrayCuentas, 1500));
console.log(cuentas.arreglo[3]);
console.log(cuentas.incrementarSaldo(arrayNuevo, 4, 1000));

