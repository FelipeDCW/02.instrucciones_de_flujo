/* Solicitar cuantas repeticiones va a jugar */
var repeticiones = parseInt(prompt(`cantidad de veces a jugar: `))

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
            console.log(`El usuario empato`)
        }
        else if (maquina == 2) {
            console.log(`La maquina gano con papel`)    
        }
        else {
            console.log(`La maquina perdio con tijera`)
        }
    }

    if (eleccion == 2) {
        if (maquina == 1) {
            console.log(`La usuario gano con papel`)    
        }
        else if (maquina == 2) {
            console.log(`El usuario empato`)
            
        }
        else {
            console.log(`La maquina gano con tijera`)
        }
    }
    if (eleccion == 3) {
        if (maquina == 1) {
            console.log(`La maquina gano con piedra`)    
        }
        else if (maquina == 2) {
            console.log(`La maquina perdio con papel`)
            
        }
        else {
            console.log(`El usuario empato`)
            
        }
    }

}

