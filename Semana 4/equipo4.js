//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
];
// podes continuar tu codigo a partir de aca!
console.log(arrayCuentas[0]);

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(titular){
        for(let i=0; i<this.clientes.length; i++){
            if(this.clientes[i].titularCuenta==titular){
                return this.clientes[i]
            }
        }
    },
    deposito: function(titular, dinero){
        let cliente = this.consultarCliente(titular)
        cliente.saldoEnPesos += dinero
        return `Depósito realizado, su nuevo saldo es: ${cliente.saldoEnPesos}`
    },
    extraccion: function(titular, dinero){
        let cliente = this.consultarCliente(titular)
        cliente.saldoEnPesos -= dinero
        return `Extracción realizada correctamente, su nuevo saldo es: ${cliente.saldoEnPesos}`
    }
}

let clienteEncontrado = banco.consultarCliente("Ramon Connell");
console.log(clienteEncontrado);

let depositoNuevo = banco.deposito("Ramon Connell", 2500)
console.log(depositoNuevo);

let extraccionNueva = banco.extraccion("Ramon Connell", 2500)
console.log(extraccionNueva);