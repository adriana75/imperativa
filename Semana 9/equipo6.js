const arrayProfesionales  = [
    {
      identificador: 0,
      estaHabilitado: true,        
      honorarioConsulta: 2007.68,  
      edad: 29,
      nombre: 'Huber Wilkins',     
      especialidad: 'Neumonologia',
      cantidadConsultas: 2,        
      puntuacion: 0
    },
    {
      identificador: 1,
      estaHabilitado: true,        
      honorarioConsulta: 2325.56,  
      edad: 21,
      nombre: 'Goldie Haley',      
      especialidad: 'Cardiologia', 
      cantidadConsultas: 4,        
      puntuacion: 0
    },
    {
      identificador: 2,
      estaHabilitado: true,        
      honorarioConsulta: 2208.17,  
      edad: 36,
      nombre: 'Pena Landry',       
      especialidad: 'Dermatologia',
      cantidadConsultas: 0,        
      puntuacion: 0
    },
    {
      identificador: 3,
      estaHabilitado: true,        
      honorarioConsulta: 3266.71,  
      edad: 20,
      nombre: 'Leanne Burch',      
      especialidad: 'Neumonologia',
      cantidadConsultas: 2,        
      puntuacion: 0
    },
    {
      identificador: 4,
      estaHabilitado: false,       
      honorarioConsulta: 2674.09,  
      edad: 31,
      nombre: 'Haynes Fuentes',    
      especialidad: 'Cardiologia',        
      cantidadConsultas: 4,
      puntuacion: 0
    },
    {
      identificador: 5,
      estaHabilitado: false,
      honorarioConsulta: 1851.37,
      edad: 27,
      nombre: 'Tamika Fuentes',
      especialidad: 'Cardiologia',        
      cantidadConsultas: 0,
      puntuacion: 0
    },
    {
      identificador: 6,
      estaHabilitado: false,
      honorarioConsulta: 2568.94,
      edad: 34,
      nombre: 'Russo Baldwin',
      especialidad: 'Dermatologia',       
      cantidadConsultas: 0,
      puntuacion: 0
    },
    {
      identificador: 7,
      estaHabilitado: true,
      honorarioConsulta: 2601.76,
      edad: 36,
      nombre: 'Dodson Shaffer',
      especialidad: 'Cardiologia',        
      cantidadConsultas: 10,
      puntuacion: 0
    },
    {
      identificador: 8,
      estaHabilitado: false,
      honorarioConsulta: 1949.92,
      edad: 40,
      nombre: 'Guerra Bright',
      especialidad: 'Neumonologia',       
      cantidadConsultas: 0,
      puntuacion: 0
    },
    {
      identificador: 9,
      estaHabilitado: true,
      honorarioConsulta: 3898.11,
      edad: 28,
      nombre: 'Dina Navarro',
      especialidad: 'Cardiologia',        
      cantidadConsultas: 15,
      puntuacion: 0
    },
    {
      identificador: 10,
      estaHabilitado: true,
      honorarioConsulta: 2745.73,
      edad: 27,
      nombre: 'Stafford Watts',
      especialidad: 'Cardiologia',        
      cantidadConsultas: 3,
      puntuacion: 0
    },
    {
      identificador: 11,
      estaHabilitado: true,
      honorarioConsulta: 2808.98,
      edad: 39,
      nombre: 'Joni Avery',
      especialidad: 'Neumonologia',
      cantidadConsultas: 5,
      puntuacion: 0
    },
    {
      identificador: 12,
      estaHabilitado: true,
      honorarioConsulta: 1941.13,
      edad: 25,
      nombre: 'Mayra Tran',
      especialidad: 'Oftamologia',
      cantidadConsultas: 2,
      puntuacion: 0
    },
    {
      identificador: 13,
      estaHabilitado: true,
      honorarioConsulta: 3930.0344999999998,
      edad: 23,
      nombre: 'Ward Dale',
      especialidad: 'Cardiologia',
      cantidadConsultas: 1,
      puntuacion: 0,
      puntaje: 3
    },
    {
      identificador: 14,
      estaHabilitado: true,
      honorarioConsulta: 8900,
      edad: 28,
      nombre: 'Martin Smith',
      especialidad: 'Arquitecto',
      cantidadConsultas: 8,
      puntuacion: 100,
      puntaje: 5
    },
    {
      identificador: 15,
      estaHabilitado: true,
      honorarioConsulta: 10000,
      edad: 28,
      nombre: 'Will Smith',
      especialidad: 'Arquitecto',
      cantidadConsultas: 48,
      puntuacion: 50,
      puntaje: 4
    }
  ]

//A
arrayProfesionales.map(e => console.log(e.nombre + ' ' + '-' + ' ' + e.especialidad))
console.log('-----');
arrayProfesionales.forEach(profesional => {
  console.log(profesional.nombre + " - " + profesional.especialidad);
});
console.log('-----A');

//B
arrayProfesionales.map(e => e.honorarioConsulta = e.honorarioConsulta + (e.honorarioConsulta*5)/100)
console.log(arrayProfesionales);
console.log('-----B');

//C
let deshabilitados = arrayProfesionales.filter(e => e.estaHabilitado == false)
console.log(deshabilitados);
console.log('-----C');

//D
let habilitados = arrayProfesionales.filter(e => e.estaHabilitado == true)
console.log(habilitados);
console.log('-----D');

//E
let arquitectos = arrayProfesionales.filter(e => e.especialidad == 'Arquitecto')
console.log(arquitectos);
console.log('-----E');

//F
deshabilitados.forEach(e=>e.estaHabilitado = true)
console.log(deshabilitados);
console.log('-----F');

//G
let cantidadTotalConsultas = arrayProfesionales.reduce((acc, e)=> { return (acc + e.cantidadConsultas)}, 0)
console.log(cantidadTotalConsultas);
console.log('-----G');

//H
let arrayRecaudacion = []
arrayProfesionales.map(e=>{
  let obj = {}
  obj.Nombre = e.nombre
  obj.Especialidad = e.especialidad
  obj.Recaudacion = e.cantidadConsultas*e.honorarioConsulta
  arrayRecaudacion.push(obj)
  return arrayRecaudacion
})
console.log(arrayRecaudacion);
console.log('-----H');
