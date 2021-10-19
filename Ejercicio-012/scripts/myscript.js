/***************************************************************************************************************
*  
*   Objetivo: Pedimos reiteradamente cadenas al usuario hasta que la cadena de texto introducida es "cancelar". 
*
*
*   Entrada : cadenas de texto
*
*
*   Salida  : Cada cadena introducida se muestra en un párrafo del documento HTML
*
*
***************************************************************************************************************/

do{
    cadena=prompt("Dame una cadena de texto. No voy a parar de pedirte hasta que introduzcas \"cancelar\"")
    document.write(`<p>${cadena}</p>`);
}while(cadena!="cancelar")