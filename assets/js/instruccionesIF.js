/* instrucciones de flujo de datos */
/* if - switch */
/* if(condicional){
    Bloque de instrucciones
}
 */
/* Solicitar la edad a una persona para saber si es mayor de edad */
var edad = parseInt(prompt(`Ingrese su edad: `))
if (edad >= 18) {
    console.log(`La persona con la edad ${edad} es mayor de edad`)
}
else{
    console.log(`La persona con la edad ${edad} es menor de edad`)
}
/* En base a 2 colores: rojo y verde, indicar cual es color favorito de un usuario */
var colorfav = prompt(`Ingrese su color favorito (rojo o verde): `)
if (colorfav ==`rojo`){
    console.log(`El color favorito es rojo`)
}
else{
    console.log(`El color favorito es verde`)
}

/* En base a 2 colores: rojo, verde y amarillo, indicar cual es color favorito de un usuario */
var colorfav = prompt(`Ingrese su color favorito (rojo o verde): `)
if (colorfav ==`rojo`){
    console.log(`El color favorito es rojo`)
}
else if (colorfav ==`verde`){
    console.log(`El color favorito es verde`)
}
else{
    console.log(`El color favorito es amarillo`)
}

switch (colorfav) {
    case `rojo`:
        console.log(`El color favorito es rojo`)
        break;
    case `amarillo`:
        console.log(`El color favorito es amarillo`)
        break;
    default:
        console.log(`El color favorito es verde`)
        break;
}
