/***************************************************************************************************************
*  
*   Objetivo: Solicitaremos un número mientras no esté entre 1 y 9. 
*             Cuando ya esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
*
*   Entrada : numero     1 < numero < 9
*
*   Salida  : 1 x numero = numero
*             2 x numero = ....
*             3 x numero = ....
*                   ....
*             9 x numero = ....
*
*   Nota: Formatea la salida en el documento HTML empleando *         una tabla con 4 columnas y nueve filas
*
***************************************************************************************************************/

let n;


do {
    n=prompt("Dame un número")
} while(isNaN(n)||n<1||n>9)

//n=parseInt(n)
for(let i=0;i<=n;i++){
    document.write(`${i} x ${n} <br/>`);

    
}