/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su nombre y mostrar un mensaje de bienvenida
*             mediante una ventana de alerta
*
*
*   Entrada : nombre
*
*
*   Salida  : Bienvenido a mi página, XXXX   (XXXX será el nombre del usuario que visita la página)
*
*
***************************************************************************************************************/
let nombre=window.prompt("por favor dime tu nombre")
document.write(`Bienvenido a mi página, ${nombre}`);
console.log(`Bienvenido a mi página, ${nombre}`);