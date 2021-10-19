/***************************************************************************************************************
*  
*   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. Se rellena cada celda con 
*             el producto del numero de fila por el número de columna
*
*
*   Entrada : números enteros: nfilas, ncols
*
*
*   Salida  : tabla html con nfilas y ncols
*
*
***************************************************************************************************************/
/*### Esto funciona pero si me equivoco se debe repetir todo el proceso
do{
    filas=prompt("Indicame el nº de filas")
    col=prompt("Indicame el nº de columnas")
    filas=parseFloat(filas)
    col=parseFloat(col)
}while(!Number.isInteger(filas)||!Number.isInteger(col))

####*/

// Esto anterior lo podríamos hacer independiente para las filas y las columnas
//entonces si me equivocoen un dato, solo debo repetir una sola entrada no como en 
//esta que repito todo
//Veamos como se hace

function verificarEntero(i){
    let numeroEntero
    do{
        numeroEntero=prompt(`Dame un numero entero ${i} `)
        numeroEntero=parseFloat(numeroEntero)
    }while(!Number.isInteger(numeroEntero)||numeroEntero<1)

    return numeroEntero
}

let filas
let col 
do{
    filas=verificarEntero(1)
    col= verificarEntero(2)
}while(filas<0||col<0)

/* Solución de Julián:

function leerEntero(i) {
    let numero
    do {
       numero=prompt(`Dame el entero número${i}: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1)
    return parseInt(numero)
}

let nfilas
let ncols
do {
   nfilas=leerEntero(1)
   ncols=leerEntero(2)
} while (nfilas<0||ncols<0)

*/

let salida="<table border>" // border es para quedibuje el borde

for(let i=1;i<=filas; i++){
    salida+="<tr>"
    for(let j=1; j<=col;j++){
        salida += `<td> ${i*j} </td>`
    }
    salida+="</tr>"
}
salida+="</table>"

document.write(salida)

/*esto sale  pero Julián le puso: pero esto a mi me da error
let div=document.getElementById("tabla")
div.innerHTML=salida
*/
