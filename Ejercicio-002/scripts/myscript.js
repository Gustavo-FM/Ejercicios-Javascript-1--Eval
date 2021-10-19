/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su nombre y mostrar un mensaje de bienvenida
*             en la página HTML
*
*
*   Entrada : nombre
*
*
*   Salida  : Bienvenido a mi página, XXXX   (XXXX será el nombre del usuario que visita la página)
*
*
***************************************************************************************************************/


let nombre=window.prompt("Dime tu nombre","Dame tu nombre por favor!!!")
//document.write("<h2>Bienvendio a mi página, "+nombre+"</h2>")
document.write(`<h2>Bienvendio a mi página, ${nombre}</h2>`)