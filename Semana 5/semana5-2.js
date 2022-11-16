const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
const edadesGrupo1 = [21, 12, 15, 18, 25];
const edadesGrupo2 = [2, 11, 54, 63, 24];

const ejerciciosArray = arr => {
    let menores = []
    let mayores = []
    let iguales = []
    let suma = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == 18){
            iguales.push(arr[i])
        }else if(arr[i] < 18){
            menores.push(arr[i])
        }else if(arr[i] >= 18){
            mayores.push(arr[i])
        }
        suma += arr[i]
    }
    let mayor = Math.max(...arr)
    let menor = Math.min(...arr)
    let promedio = suma / arr.length
    console.log('Menores: ' + menores);
    console.log('Mayores: ' + mayores);
    console.log('Iguales a 18: ' + iguales);
    console.log('Mayor: ' + mayor);
    console.log('Menor: ' + menor);
    console.log('Promedio: ' + promedio);
}
//ejerciciosArray(edades)

const incrementar = arr => {
    for(let i=0; i<arr.length; i++){
        arr[i] += 1
    }
    console.log('Incremento en 1: ' + arr);
}
//incrementar(edades)


//Ejercicio con objetos literales
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

const menores = arr => {
    let menoresTreinta = []
    let mayoresTreinta = []
    let menoresIgualTreinta = []
    for(let i=0; i<arr.length; i++){
        if(arr[i]<30){
            menoresTreinta.push(arr[i])
        }else if(arr[i]>=30){
            mayoresTreinta.push(arr[i])
        }else if(arr[i]<=30){
            menoresIgualTreinta.push(arr[i])
        }
    }
    let joven = Math.min(arr[3])
    console.log(joven);
}
menores(arrayCuentas)








