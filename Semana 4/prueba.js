let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
const mayusculas = arreglo => {
    let peliculas = []
    for(let i=0; i<arreglo.length; i++){
        peliculas.push(arreglo[i].toUpperCase())
    }
    return peliculas
}
//console.log(mayusculas(peliculas)); 

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

const generadorId = arreglo => {
    for(let i = 0; i < arreglo.length; i++){
        arreglo[i].id = i + 1
    }
}

generadorId(arrayCuentas)
//console.log(arrayCuentas);

const filtrar = (arr, categoria) => {
  let arrFiltrado = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].tipoDeCuenta === categoria){
      arrFiltrado.push(arr[i])
    }     
  }
  return arrFiltrado
}

console.log(filtrar(arrayCuentas, "Cuenta Corriente"));




