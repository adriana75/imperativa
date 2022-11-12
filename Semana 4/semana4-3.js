const alicia = [10, 80, 75];
const bob = [90, 20, 25];

let concurso = {
    etapas: [], 
    ganador: "",
    encontrarGanador: function(a, b){
        let puntosA = 0
        let puntosB = 0
        for(let i = 0; i<a.length; i++){
            if(a[i]>b[i]){
                puntosA += 1 
                this.etapas.push("Alicia")
            }else if(a[i]<b[i]){
                puntosB += 1
                this.etapas.push("Bob")
            }else{
                this.etapas.push("Empate")
            }     
        }
        if(puntosA > puntosB){
            this.ganador = "Alicia"
        }else if(puntosA < puntosB){
            this.ganador = "Bob"
        }else this.ganador = ""
        return this.ganador 
    },
    exportarResultado: function(){
        let nuevoArr = []
        let obj = {}
        for(let i = 0; i < this.etapas.length; i++){
            let ganador = this.etapas[i]
            let nuevoObj = {}
            nuevoObj.Etapa = i+1
            nuevoObj.Ganador = ganador
            nuevoArr.push(nuevoObj)
        }
        obj.GanadorFinal = this.ganador
        nuevoArr.push(obj)
        return nuevoArr
    }
}

concurso.encontrarGanador(alicia, bob)
concurso.exportarResultado()
console.log(concurso.etapas);
console.log(concurso.exportarResultado());

