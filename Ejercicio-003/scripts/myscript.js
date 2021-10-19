/***************************************************************************************************************
*  
*   Objetivo: Crea un script Javascript que solicite el nombre a un usuario y su edad al abrir la página.
*
*
*   Entrada : cadena de texto, numero: nombre, edad
*
*
*   Salida  : Tiene que mostrar la información solicitada a través de la consola de depuración
*                       Tu nombre es .... y tienes .... años
*
*
***************************************************************************************************************/


let nombre=window.prompt("Dime tu nombre por favor")
let edad=prompt("Dime tu edad")
document.write(`<h2>Tu nombre es ${nombre} y tienes ${edad} años</h2>`)

alert (`<h2>Tu nombre es ${nombre} y tienes ${edad} años</h2>`)