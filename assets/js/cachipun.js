/* Solicitar cuantas repeticiones va a jugar */
var repeticiones = parseInt(prompt(`cantidad de veces a jugar: `))
var contmaquina = 0
var contusuario = 0
for (var i = 1; i <= repeticiones; i = i + 1) {
    var eleccion = prompt(`Elegir la jugada (1=piedra ,2= papel o 3=tijera): `)

    switch (Math.floor(Math.random() * 3)) {

        case 0:
            var valormaquina = `piedra`
            console.log(valormaquina)
            var maquina = 1
            break;
        case 1:
            var valormaquina = `papel`
            console.log(valormaquina)
            var maquina = 2
            break;
        default:
            var valormaquina = `tijera`
            console.log(valormaquina)
            var maquina= 3
            break;
    }
    
    if (eleccion == 1) {
        if (maquina == 1) {
            alert(`El usuario empato`)
            console.log(`El usuario empato`)
        }
        else if (maquina == 2) {
            alert(`La maquina gano con papel`)
            console.log(`La maquina gano con papel`)  
            ++contmaquina  
        }
        else {
            alert(`El usuario gano con tijera`)
            console.log(`El usuario gano con tijera`)
            ++contusuario
        }
    }

    if (eleccion == 2) {
        if (maquina == 1) {
            alert(`La usuario gano con papel`)
            console.log(`La usuario gano con papel`)    
            ++contusuario
        }
        else if (maquina == 2) {
            alert(`El usuario empato`)
            console.log(`El usuario empato`)
            
        }
        else {
            alert(`La maquina gano con tijera`)
            console.log(`La maquina gano con tijera`)
            ++contmaquina
        }
    }
    if (eleccion == 3) {
        if (maquina == 1) {
            alert(`La maquina gano con piedra`)
            console.log(`La maquina gano con piedra`)  
            ++contmaquina  
        }
        else if (maquina == 2) {
            alert(`El usuario gano con papel`)
            console.log(`El usuario gano con papel`)
            ++contusuario
            
        }
        else {
            alert(`El usuario empato`)
            console.log(`El usuario empato`)
            
        }
    }

}

if (contusuario  < contmaquina){
    alert(`El ganador final fue la maquina con ${contmaquina} aciertos`)
}
else if(contusuario > contmaquina){
    alert(`El ganador final fue el usuario con ${contusuario} aciertos`)
}
else{
    alert(`El duelo fue un empate con ${contmaquina} para cada uno`)

}

